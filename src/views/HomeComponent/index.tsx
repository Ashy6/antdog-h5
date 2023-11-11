import { useNavigate } from 'react-router-dom'
import { Button } from 'antd-mobile'
import routes from '../../routes'

import SwiperComponent from './SwiperComponent'
import TagsComponents from './TagsComponent'
import CardsListComponent from './CardsComponent'

import './style.scss'

export default function Home() {
    const navigate = useNavigate()

    return (
        <div className='home-component full-container'>
            <SwiperComponent />
            <TagsComponents />
            <CardsListComponent />

            {/* TODO：临时页面路由： */}
            {routes.map(item => (
                <div key={item.path}>
                    <Button onClick={() => navigate(item.path)}>{item.name}</Button>
                </div>
            ))}
        </div>
    )
}
