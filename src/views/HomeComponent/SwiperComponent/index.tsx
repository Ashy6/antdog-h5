import { Swiper } from 'antd-mobile'

import './style.scss'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

const SwiperItem = colors.map((color, index) => (
    <Swiper.Item
        key={index}
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            console.log('e', e)
        }}
    >
        <div className='content'>
            <div className='content-item' style={{ background: color }}>
                {index + 1}
            </div>
        </div>
    </Swiper.Item>
))

export default function SwiperComponent() {

    return <Swiper
        style={{
            '--height': '210rem'
        }}
        slideSize={88}
        trackOffset={6}
        // 循环
        loop
        // 自动播放
        autoplay
        // 允许收拾滑动
        allowTouchMove
        stuckAtBoundary={false}
        // 切换时触发
        onIndexChange={i => {
            console.log(i, 'onIndexChange1')
        }}
    >
        {SwiperItem}
    </Swiper>
}