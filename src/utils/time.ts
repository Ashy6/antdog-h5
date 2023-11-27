export const formatTime = (createTime: string) => {
    if (!createTime) return ''
    const date = new Date(createTime)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const formattedDate = `${year}.${month}.${day} ${hours}:${minutes < 10 ? `0${minutes}` : minutes}`
    return formattedDate
}
