const tokenKey = '__gating__token'

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
