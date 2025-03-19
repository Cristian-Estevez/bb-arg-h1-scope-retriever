// DOCS
// https://api.hackerone.com/hacker-resources/#programs-get-structured-scopes

import C from '../constants/constants'
import { getApiKey } from '../utils/apiKey.utils'
import { getHackerHandle } from '../utils/hackerHandle.utils'

const getHeaders = async () => {
  const storedApiKey = await getApiKey()
  const storedHackerHandle = await getHackerHandle()

  if (storedApiKey && storedHackerHandle) {
    const authHeader = btoa(`${storedHackerHandle}:${storedApiKey}`)

    return {
      Authorization: `Basic ${authHeader}`,
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }

  throw new Error('Missing API key or HackerOne username')
}

export async function fetchData() {
  const headers = await getHeaders()
  const response = await fetch(C.h1Endpoints.getPrograms, { headers })
  if (!response.ok) throw new Error('Failed to fetch')
  return response.json()
}

export const fetchAllProgramHandles = async () => {
  let page = 1
  const programHandles: Set<string> = new Set()

  while (true) {
    const url = C.h1Endpoints.getPrograms.replace('{page}', page.toString())
    const headers = await getHeaders()

    const response = await fetch(url, { headers })

    if (!response.ok) {
      console.error('Failed to fetch programs', { page })
      throw new Error('Failed to fetch programs')
    }

    const res = await response.json()
    if (!res.data || res.data.length === 0) {
      break
    }

    const handles = res.data.map(
      (program: { attributes: { handle: string } }) => program.attributes.handle
    )

    handles.forEach((handle: string) => programHandles.add(handle))

    page++
  }

  const uniqueHandles = Array.from(programHandles)
  return uniqueHandles
}

export async function fetchScope(programHandle: string) {
  const url = C.h1Endpoints.fetchScope.replace('{handle}', programHandle)
  const headers = await getHeaders()

  const response = await fetch(url, { headers })
  if (!response.ok) {
    console.error('Failed to fetch scope', { programHandle })
    throw new Error('Failed to fetch scope')
  }

  const res = await response.json()
  const scopes = res.data
    .filter(
      (scope: {
        attributes: {
          eligible_for_bounty: boolean
          eligible_for_submission: boolean
        }
      }) =>
        scope.attributes.eligible_for_submission &&
        scope.attributes.eligible_for_bounty
    )
    .map(
      (scope: { attributes: { asset_identifier: string } }) =>
        scope.attributes.asset_identifier
    )

  return scopes
}
