import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd-mobile'
import NavBarComponent from '../../components/NavBarComponent'
import SideBarComponent from '../SideBarComponent'
import routes from '../../routes'

export default function Home() {
    const [visible, setVisible] = useState<boolean>(false)

    const navigate = useNavigate()

    return (
        <div className='full-100'>
            <NavBarComponent sideBarOpenCallback={() => setVisible(true)}>
                <SideBarComponent
                    visible={visible}
                    sideBarCloseCallback={() => setVisible(false)}
                />
            </NavBarComponent>
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
