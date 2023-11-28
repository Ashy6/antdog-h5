import { useState } from 'react'

/**
 * @param initCount 调用次数
 * @param time 定时器执行时间间隔
 * @returns [开始调用, 计数器, 是否执行中]
 */
export default (
  initCount = 120,
  time = 1000
): [() => void, number, boolean] => {
  const [count, setCount] = useState(initCount)

  const [tiggering, setTiggering] = useState(false)

  let timer: NodeJS.Timeout | null = null
  const tigger = () => {
    setCount(initCount)
    if (!tiggering) {
      setTiggering(true)
      timer = setInterval(() => {
        setCount(count => count - 1)
      }, time)
    }

    setTimeout(function () {
      timer && clearInterval(timer)
      setTiggering(false)
    }, initCount * time)
  }

  return [tigger, count, tiggering]
}
