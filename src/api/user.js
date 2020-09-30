import { get, post, put, del } from '@/utils/request'

export const getInfo = () => get('/user/info')
export const delUser = data => del('/user/user', data)
export const login = data => post('/user/login', data)
export const logout = () => put('/user/logout')
