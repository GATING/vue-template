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
  return JSON.parse(localStorage.getItem(key))
}

export function setStorage(key, data) {
  return localStorage.setItem(key, JSON.stringify(data))
}

export function removeStorage(TokenKey) {
  return localStorage.removeItem(TokenKey)
}
