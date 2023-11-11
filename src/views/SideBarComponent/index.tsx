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
                                onClick={() => navigate(menu.path)}
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
        path: '', // TODO： 用户点击进入博客链接
        isActive: false
    },
    {
        label: 'Help',
        path: '', // TODO： 用户点击进入帮助链接内容
        isActive: false
    },
    {
        label: 'Custormer Support',
        path: '', // TODO：用户点击跳转 Whatsapp 客服
        isActive: false
    }
]
