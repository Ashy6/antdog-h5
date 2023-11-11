import { API_PREFIX, instance } from './util';


export function getCardList(page = 1) {
    return instance({
        url: `${API_PREFIX}/card/page`,
        method: 'post',
        data: {
            page
        }
    })
}