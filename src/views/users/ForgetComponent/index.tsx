import { useState } from "react";
import { Button, Form, Input } from "antd-mobile";
import { EyeInvisibleOutline, EyeOutline } from "antd-mobile-icons";

import '../style.scss'

export default function ForgetComponent() {
    const [visible, setVisible] = useState(false);

    return <>
        <div>
            <p>Hello,Welcome to Antdog</p>
        </div>
        <div>
            <p>by email</p>
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
                <Form.Item
                    label='passward' name='password' rules={[{ required: true }]}
                    extra={
                        <div className={'eye'}>
                            {!visible ? (
                                <EyeInvisibleOutline onClick={() => setVisible(true)} />
                            ) : (
                                <EyeOutline onClick={() => setVisible(false)} />
                            )}
                        </div>
                    }
                >
                    <Input
                        placeholder='New Password (6-16 characters,only letters and numbers)'
                        clearable
                        type={visible ? 'text' : 'password'}
                    />
                </Form.Item>
            </Form>
        </div >
        <div>
            <Button className="antdog-btn full">Confirm</Button>
        </div>
    </>
}