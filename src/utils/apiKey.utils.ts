import browser from 'webextension-polyfill'

const encrypt = (data: string) => {
  return btoa(data)
}

const decrypt = (data: string) => {
  try {
    return atob(data)
  } catch (error) {
    console.error('Decryption error:', error)
    return ''
  }
}

const storeApiKey = async (apiKey: string) => {
  const encryptedApiKey = encrypt(apiKey)
  if (typeof browser !== 'undefined') {
    // For Firefox or browsers supporting the WebExtension API
    await browser.storage.local.set({ apiKey: encryptedApiKey })
  } else if (typeof chrome !== 'undefined') {
    // For Chrome
    chrome.storage.local.set({ apiKey: encryptedApiKey })
  }
}

const getApiKey = async (): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    if (typeof browser !== 'undefined') {
      // For Firefox or browsers supporting the WebExtension API
      browser.storage.local.get('apiKey').then(
        (result) => {
          const apiKey = result.apiKey ? decrypt(result.apiKey as string) : null
          resolve(apiKey)
        },
        (error) => {
          console.error('Error retrieving API key:', error)
          reject(error)
        }
      )
    } else if (typeof chrome !== 'undefined') {
      // For Chrome
      chrome.storage.local.get('apiKey', (result) => {
        const apiKey = result.apiKey ? decrypt(result.apiKey) : null
        resolve(apiKey)
      })
    }
  })
}

const clearApiKey = async () => {
  if (typeof browser !== 'undefined') {
    await browser.storage.local.remove('apiKey')
  } else if (typeof chrome !== 'undefined') {
    chrome.storage.local.remove('apiKey')
  }
}

export { storeApiKey, getApiKey, clearApiKey }
