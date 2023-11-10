import { useState } from "react"
import NavBarComponent from "../../components/NavBarComponent"
import SideBarComponent from "../SideBarComponent"

export default function Home() {
    const [visible, setVisible] = useState<boolean>(false)

    return (
        <div className="full-100">
            <NavBarComponent sideBarOpenCallback={() => setVisible(true)}>
                <SideBarComponent visible={visible} sideBarCloseCallback={() => setVisible(false)} />
            </NavBarComponent>
            首页
        </div>
    )
}
