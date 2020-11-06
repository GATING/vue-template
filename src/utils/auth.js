const tokenKey = '__gating__token'
const sessionStorage = window.sessionStorage

export function getToken() {
  return getStorage(tokenKey)
}

export function setToken(data) {
  return setStorage(tokenKey, data)
}

export function removeToken() {
  return removeStorage(tokenKey)
}

export function getStorage(key) {
  if (typeof key !== 'string') {
    return undefined
  }
  try {
    return JSON.parse(sessionStorage.getItem(key))
  } catch (err) {
    return
  }
}

export function setStorage(key, data) {
  return sessionStorage.setItem(key, JSON.stringify(data))
}

export function removeStorage(TokenKey) {
  return sessionStorage.removeItem(TokenKey)
}

export function getAllStorage() {
  const all = {}
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i)
    const val = getStorage(key)
    all[key] = val
  }
  return all
}

export function clearStorage() {
  return sessionStorage.clear()
}
