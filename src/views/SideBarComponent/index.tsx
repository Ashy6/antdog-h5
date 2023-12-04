import { useState } from 'react'
import { Popup } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import UserComponent from '../../components/UserComponent'
import menuPath from '../../routes/path'

import './style.scss'

interface SidebarProps {
    visible: boolean
    sideBarCloseCallback: () => void
}
export default function SideBarComponent(props: SidebarProps) {
    const { visible, sideBarCloseCallback } = props

    const navigate = useNavigate()

    const [isLogin, setIsLogin] = useState(true)

    const [menus, setMenus] = useState(MenusMock)

    return (
        <>
            <Popup
                visible={visible}
                onMaskClick={() => {
                    sideBarCloseCallback()
                }}
                position='left'
                bodyStyle={{ width: '50vw' }}
            >
                <div className='sidebar full-100'>
                    <div className='sidebar-container'>
                        {/* 用户 */}
                        <div className='sidebar-container-user'>
                            <UserComponent isLogin={isLogin} />
                        </div>

                        {/* 菜单 */}
                        {menus.map((menu, i) => (
                            <div
                                className={`sidebar-item focus-it ${menu.isActive && 'is-active'}`}
                                key={i}
                                onClick={() =>
                                    menu.path
                                        ? navigate(menu.path)
                                        : window.open(menu.url, '_blank')
                                }
                            >
                                {menu.label}
                            </div>
                        ))}

                        {/* 退出 */}
                        {isLogin && (
                            <div
                                className='sidebar-item'
                                onClick={() => {
                                    navigate(menuPath.HOME_PATH)
                                    setIsLogin(false)
                                }}
                            >
                                Logout
                            </div>
                        )}
                    </div>
                    {/* 注销 */}
                    {isLogin && (
                        <div
                            className='sidebar-container-deregister'
                            onClick={() => navigate(menuPath.CLOSE_ACCOUNT_PATH)}
                        >
                            Deregister
                        </div>
                    )}
                </div>
            </Popup>
        </>
    )
}

export const MenusMock = [
    {
        label: 'Withdraw',
        path: menuPath.WITHDRAW_DEPOSIT_PATH,
        isActive: false
    },
    {
        label: 'Order History',
        path: menuPath.ORDER_LIST_PATH,
        isActive: false
    },
    {
        label: 'Blog',
        path: menuPath.BLOG_PATH,
        isActive: false
    },
    {
        label: 'Help',
        url: 'https://m.antdog.com/article/faq.html',
        isActive: false
    },
    {
        label: 'Custormer Support',
        path: 'https://api.whatsapp.com/send/?phone=%2B8618227635036&text&type=phone_number&app_absent=0',
        isActive: false
    }
]
