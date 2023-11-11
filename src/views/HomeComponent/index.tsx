import { useNavigate } from 'react-router-dom'
import { Button, Swiper } from 'antd-mobile'
import routes from '../../routes'
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

export default function Home() {
    const navigate = useNavigate()

    return (
        <div className='home-component full-100'>
            <Swiper
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
            首页
            {/* TODO：临时页面路由： */}
            {routes.map(item => (
                <div key={item.path}>
                    <Button onClick={() => navigate(item.path)}>{item.name}</Button>
                </div>
            ))}
        </div>
    )
}
