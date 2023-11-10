import { Popup } from 'antd-mobile'

interface SidebarProps {
    visible: boolean
    sideBarCloseCallback: () => void
}
export default function SideBarComponent({ visible, sideBarCloseCallback }: SidebarProps) {
    return (
        <>
            {/* TODO：容器实现，SideBar 组件在 view 中实现，NavBar 用作容器使用 */}
            <Popup
                visible={visible}
                onMaskClick={() => {
                    sideBarCloseCallback()
                }}
                position='left'
                bodyStyle={{ width: '48vw' }}
            >
                侧边栏组件
                <p>1. 控制登录登出的逻辑</p>
                <p>2. 控制注册的逻辑</p>
                <p>3. 控制注销的逻辑</p>
                登录用户信息列表页
            </Popup>
        </>
    )
}
