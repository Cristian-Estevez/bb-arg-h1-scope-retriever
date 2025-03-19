import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { clearApiKey } from '../utils/apiKey.utils'
import SlashedEye from '../assets/icons/slashedEye'
import Trash from '../assets/icons/trash'
import IconButton from './ui/IconButton'
import PageHeader from './PageHeader'
import Eye from '../assets/icons/eye'
import Input from './ui/Input'
import { clearHackerHandle } from '../utils/hackerHandle.utils'
import { fetchAllProgramHandles, fetchScope } from '../services/h1Service'
import Skeleton from './ui/Skeleton'
import Download from '../assets/icons/download'
import {
  clearStoragedProgramHandles,
  getStoredProgramHandles,
  storeStoredProgramHandles
} from '../utils/programHandle.utils'
import Refresh from '../assets/icons/refresh'

export default function ScopesScreen({
  apiKey,
  setApiKey,
  hackerHandle,
  setHackerHandle
}: {
  apiKey: string
  setApiKey: (apiKey: string | null) => void
  hackerHandle: string
  setHackerHandle: (hackerHandle: string | null) => void
}) {
  const [programHandles, setProgramHandles] = useState<string[] | null>(null)
  const [search, setSearch] = useState('')
  const [filteredHandles, setFilteredHandles] = useState<string[]>([])

  const storedHandles = getStoredProgramHandles()
  const { data, error, isLoading, isFetching, refetch } = useQuery({
    queryKey: ['scopes', `${apiKey}:${hackerHandle}`],
    queryFn: fetchAllProgramHandles,
    enabled: !!apiKey && !!hackerHandle && !storedHandles,
    initialData: () => {
      const storedHandles = getStoredProgramHandles()
      return storedHandles ? JSON.parse(storedHandles) : undefined
    },
    staleTime: 1000 * 60 * 60 * 24
  })

  useEffect(() => {
    if (data) {
      setProgramHandles(data)
      storeStoredProgramHandles(data)
    }
  }, [data])

  useEffect(() => {
    const storedHandles = getStoredProgramHandles()
    if (storedHandles) {
      setProgramHandles(JSON.parse(storedHandles))
    }
  }, [])

  useEffect(() => {
    setFilteredHandles(
      programHandles?.filter((handle) =>
        handle.toLowerCase().includes(search.toLowerCase())
      ) ?? []
    )
  }, [search, programHandles])

  const handleRefreshProgramHandles = () => {
    clearStoragedProgramHandles()
    refetch()
  }

  const handleDownload = async (handle: string) => {
    try {
      const scopes = await fetchScope(handle)

      if (scopes.length === 0) {
        alert('No hay dominios elegibles en el scope.')
        return
      }

      const textContent = scopes.join('\n')
      const blob = new Blob([textContent], { type: 'text/plain' })
      const urlObject = URL.createObjectURL(blob)

      const a = document.createElement('a')
      a.href = urlObject
      a.download = `${handle}_scopes.txt`
      document.body.appendChild(a)
      a.click()

      document.body.removeChild(a)
      URL.revokeObjectURL(urlObject)
    } catch (error) {
      console.error('Error descargando scope:', error)
    }
  }

  return (
    <>
      <PageHeader></PageHeader>

      {error && <p className='text-red-700 font-semibold'>{error.message}</p>}
      {isLoading || isFetching ? (
        <Skeleton />
      ) : (
        <div className='relative w-full mx-auto'>
          <div className='flex items-center gap-4'>
            <Input
              type='text'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search for a handle...'
              className='w-full'
            />
            <IconButton
              title='refrescar program handles'
              onClick={handleRefreshProgramHandles}
            >
              <Refresh className='size-5' />
            </IconButton>
          </div>

          {search && filteredHandles.length > 0 && (
            <ul className='absolute left-0 w-full top-10 bg-black rounded-md shadow-md max-h-36 overflow-y-auto'>
              {filteredHandles.map((handle) => (
                <li
                  key={handle}
                  onClick={() => handleDownload(handle)}
                  className='p-2 cursor-pointer bg-black hover:text-sky-500 flex justify-between'
                >
                  {handle} <Download className='size-4' />
                </li>
              ))}
            </ul>
          )}

          {search && filteredHandles.length === 0 && (
            <p className='text-sm text-center mt-1'>
              No se encontraron resultados
            </p>
          )}
        </div>
      )}

      <HackerDataBox
        apiKey={apiKey}
        setApiKey={setApiKey}
        hackerHandle={hackerHandle}
        setHackerHandle={setHackerHandle}
      />
    </>
  )
}

const iconClassName = 'size-5'
function HackerDataBox({
  apiKey,
  setApiKey,
  hackerHandle,
  setHackerHandle
}: {
  apiKey: string
  setApiKey: (apiKey: string | null) => void
  hackerHandle: string
  setHackerHandle: (hackerHandle: string | null) => void
}) {
  const [inputType, setInputType] = useState<'password' | 'text'>('password')

  const handleClearApiKey = () => {
    setApiKey(null)
    clearApiKey()
  }

  const handleClearHackerHandle = () => {
    setHackerHandle(null)
    clearHackerHandle()
  }

  return (
    <div className='flex flex-col gap-2 absolute bottom-2 right-2'>
      <div className='flex gap-4 items-center'>
        Api key:
        <Input
          type='text'
          value={hackerHandle}
          disabled
          className='w-auto'
        />
        <IconButton
          onClick={handleClearHackerHandle}
          title='eliminar hacker handle'
          className='hover:text-red-600'
        >
          <Trash className={iconClassName} />
        </IconButton>
      </div>

      <div className='flex gap-4 items-center'>
        Api key:
        <Input
          type={inputType}
          value={apiKey}
          disabled
          className='w-auto'
        />
        <IconButton
          onClick={() =>
            setInputType((prev) => (prev === 'password' ? 'text' : 'password'))
          }
          title={inputType === 'password' ? 'mostrar' : 'esconder'}
        >
          {inputType === 'password' ? (
            <Eye className={iconClassName} />
          ) : (
            <SlashedEye className={iconClassName} />
          )}
        </IconButton>
        <IconButton
          onClick={handleClearApiKey}
          title='eliminar api key'
          className='hover:text-red-600'
        >
          <Trash className={iconClassName} />
        </IconButton>
      </div>
    </div>
  )
}
