const storageHandleKey = 'programHandles'

export function storeStoredProgramHandles(programHandles: string[]) {
  localStorage.setItem(storageHandleKey, JSON.stringify(programHandles))
}

export function getStoredProgramHandles() {
  return localStorage.getItem(storageHandleKey)
}

export function clearStoragedProgramHandles() {
  localStorage.removeItem(storageHandleKey)
}
