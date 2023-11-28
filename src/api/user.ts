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

/**
 * 验证码
 */
export interface CodeParams {
  receiver: string
}
export const getMailCode = (options: CodeParams): Promise<RequestDate> => {
  return instance({
    url: `${API_PREFIX}/api/mail/code`,
    method: 'post',
    data: options
  })
}

/**
 * 注册
 */
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
