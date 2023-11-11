import { useNavigate } from 'react-router-dom'
import { Button } from 'antd-mobile'
import routes from '../../routes'

export default function Home() {

    const navigate = useNavigate()

    return (
        <div className='full-100'>
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
