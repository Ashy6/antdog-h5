import { useState } from 'react';
import { useReactive } from 'ahooks';
import { NavBar, Popup, Toast } from 'antd-mobile'
import { LeftOutline, UnorderedListOutline } from 'antd-mobile-icons'
import { NavBarType } from './type'
import TitleComponent from './TitleComponent'

export default function NavBarComponent({ type }: { type?: NavBarType }) {

    const state = useReactive({ navBarType: type || NavBarType.home })
    const [visible, setVisible] = useState(false)

    const back = () => {
        switch (type) {
            case NavBarType.home:
                // TODO：打开 Popup
                setVisible(true)
                break;

            default:
                Toast.show({
                    content: '点击了返回区域',
                    duration: 1000
                })
                break;
        }
    }

    return (
        <>
            <NavBar
                backArrow={
                    state.navBarType === NavBarType.home ?
                        <UnorderedListOutline /> : <LeftOutline />
                }
                onBack={back}
            >
                <TitleComponent titleType={state.navBarType} />
            </NavBar>

            {/* TODO：容器实现，该组件在 view 中实现，NavBar 用作容器使用 */}
            <Popup
                visible={visible}
                onMaskClick={() => {
                    setVisible(false)
                }}
                position='left'
                bodyStyle={{ width: '48vw' }}
            >
                登录用户信息列表页
            </Popup>
        </>
    )
}
