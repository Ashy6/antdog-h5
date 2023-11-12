import { API_PREFIX, instance } from './util'

export const uploadFile = (file: FormData) => {
    return instance({
        url: `${API_PREFIX}/api/file/upload`,
        method: 'post',
        data: file
    })
}