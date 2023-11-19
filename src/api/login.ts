import { API_PREFIX, RequestDate, instance } from './util'

export interface LoginParams {
  mail: string
  password: string
}
export const login = (options: LoginParams): Promise<RequestDate> => {
  return instance({
    url: `${API_PREFIX}/user/login`,
    method: 'post',
    data: options
  })
}

export interface RegisterParams {
  username: string
  nickname: string
  password: string
  mail: string
  verifyCode: string
}
export const register = (options: RegisterParams): Promise<RequestDate> => {
  return instance({
    url: `${API_PREFIX}/user/register`,
    method: 'post',
    data: options
  })
}
