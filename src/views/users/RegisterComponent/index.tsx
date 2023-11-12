import { Button, Checkbox, Form, Input } from "antd-mobile";

import '../style.scss'

export default function RegisterComponent() {

    return <>
        <div>
            <p>Hello,Welcome to Antdog</p>
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
                <Form.Item label='username' name='username' rules={[{ required: true }]}>
                    <Input placeholder='Username (only letters and numbers)' clearable />
                </Form.Item>
                {/* TODO：处理表单校验规则 */}
                <Form.Item label='password' name='password' rules={[{ required: true }]}>
                    <Input placeholder='Password (6-16 characters,only letter and numbers)' clearable />
                </Form.Item>
            </Form>
        </div >
        <div className="d-flex align-items-center">
        <Checkbox />
            <div>By creating an account. you indicate that you have read and agreed to Antdog's Privacy Policy and Terms of Service.</div>
        </div>
        <div>
            <Button className="antdog-btn full">Register</Button>
        </div>
    </>
}