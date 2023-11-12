import { Button, Form, Input } from "antd-mobile";
import UserComponent from "../../../components/UserComponent";

import '../style.scss'

export default function DeregisterComponent() {

    return <>
        <div>
            <UserComponent />
        </div>
        <div>
            <Form className="text-align-left" layout='vertical'>
                <Form.Item label='email' name='email' rules={[{ required: true }]}>
                    <Input placeholder='Please enter email address' clearable />
                </Form.Item>
                <Form.Item
                    label='code' name='code' rules={[{ required: true }]}
                    extra={
                        // TODO：封装公共样式 send-btn
                        <Button className="send-btn">Send code</Button>
                    }
                >
                    <Input
                        placeholder='Please enter verification code'
                        clearable
                    />
                </Form.Item>

            </Form>
        </div >
        <div>
            <Button className="antdog-btn full">Deregister</Button>
        </div>
    </>
}