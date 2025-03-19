import browser from 'webextension-polyfill'

const storeHackerHandle = async (hackerHandle: string) => {
  if (typeof browser !== 'undefined') {
    await browser.storage.local.set({ hackerHandle })
  } else if (typeof chrome !== 'undefined') {
    chrome.storage.local.set({ hackerHandle })
  }
}

const clearHackerHandle = async () => {
  if (typeof browser !== 'undefined') {
    await browser.storage.local.remove('hackerHandle')
  } else if (typeof chrome !== 'undefined') {
    chrome.storage.local.remove('hackerHandle')
  }
}

const getHackerHandle = async (): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    if (typeof browser !== 'undefined') {
      browser.storage.local.get('hackerHandle').then(
        (result) => {
          const value = result.hackerHandle as string | undefined
          resolve(value ?? null)
        },
        (error) => {
          console.error('Error retrieving Hacker handle:', error)
          reject(error)
        }
      )
    } else if (typeof chrome !== 'undefined') {
      chrome.storage.local.get('hackerHandle', (result) => {
        if (chrome.runtime.lastError) {
          console.error(
            'Error retrieving Hacker handle:',
            chrome.runtime.lastError
          )
          reject(chrome.runtime.lastError)
        } else {
          const value = result.hackerHandle as string | undefined
          resolve(value ?? null)
        }
      })
    } else {
      resolve(null)
    }
  })
}

export { storeHackerHandle, clearHackerHandle, getHackerHandle }
