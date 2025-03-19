import { ChangeEvent, useEffect, useState } from 'react'

import { getApiKey, storeApiKey } from './utils/apiKey.utils'
import ScopesScreen from './components/ScopesScreen'
import PageHeader from './components/PageHeader'
import Button from './components/ui/Button'
import Input from './components/ui/Input'
import { getHackerHandle, storeHackerHandle } from './utils/hackerHandle.utils'

export default function App() {
  const [completeFieldsError, setCompleteFieldsError] = useState<string | null>(
    null
  )
  const [inputApiKey, setInputApiKey] = useState<string | null>(null)
  const [inputHackerHandle, setInputHackerHandle] = useState<string | null>(
    null
  )
  const [apiKey, setApiKey] = useState<string | null>(null)
  const [hackerHandle, setHackerHandle] = useState<string | null>(null)

  useEffect(() => {
    const fetchStoredValues = async () => {
      const storedApiKey = await getApiKey()
      setApiKey(storedApiKey)

      const storedHackerHandle = await getHackerHandle()
      setHackerHandle(storedHackerHandle)
    }

    fetchStoredValues()
  }, [apiKey, hackerHandle])

  const handleSave = async () => {
    setCompleteFieldsError(null)
    if (inputApiKey && inputHackerHandle) {
      await storeApiKey(inputApiKey)
      setApiKey(inputApiKey)

      await storeHackerHandle(inputHackerHandle)
      setHackerHandle(inputHackerHandle)
    } else {
      setCompleteFieldsError('* Debe completar ambos campos.')
    }
  }

  const handleApiKeyChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputApiKey(event.target.value)
  }

  const handleInputHackerHandle = (event: ChangeEvent<HTMLInputElement>) => {
    setInputHackerHandle(event.target.value)
  }

  if (apiKey && hackerHandle) {
    return (
      <ScopesScreen
        apiKey={apiKey}
        setApiKey={setApiKey}
        hackerHandle={hackerHandle}
        setHackerHandle={setHackerHandle}
      />
    )
  }

  return (
    <>
      <PageHeader />

      <h1 className='text-xl'>
        ¡BB-Arg{' '}
        <a
          href='https://hackerone.com/opportunities/all'
          rel='noopener noreferrer'
          target='_blank'
        >
          Hacker One
        </a>{' '}
        Scope Retriever!
      </h1>
      <p>Para comenzar, necesitamos que ingreses tu API Key de HackerOne.</p>
      <Input
        type='text'
        value={inputHackerHandle ?? undefined}
        onChange={handleInputHackerHandle}
        placeholder='Introduce tu hacker handle'
        className='w-72'
      />
      <Input
        type='text'
        value={inputApiKey ?? undefined}
        onChange={handleApiKeyChange}
        placeholder='Introduce tu API Key'
        className='w-72'
      />
      {completeFieldsError && (
        <p className='text-red-700 font-semibold'>{completeFieldsError}</p>
      )}
      <Button
        type='button'
        className='w-72'
        onClick={handleSave}
      >
        Guardar
      </Button>
      <p className='text-center'>
        ¿No tienes una API Key? Puedes obtenerla en la{' '}
        <a
          href='https://docs.hackerone.com/en/articles/8410331-api-token'
          target='_blank'
          rel='noopener noreferrer'
        >
          documentación de HackerOne
        </a>
        .
      </p>
    </>
  )
}
