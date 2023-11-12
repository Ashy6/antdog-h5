import { useState } from "react";
import { Button, Form, Input } from "antd-mobile";
import { EyeInvisibleOutline, EyeOutline } from "antd-mobile-icons";
import { useNavigate } from "react-router-dom";
import { FORGET_PASSWORD_PATH, REGISTER_PATH } from "../../../routes/path";

import '../style.scss'

export default function LoginComponent() {
    const navigate = useNavigate()
    const [visible, setVisible] = useState(false);

    return <>
        <div>
            <p>Hello,Welcome to Antdog</p>
        </div>
        <div>
            <p>Login by email</p>
        </div>
        <div>
            <Form className="text-align-left" layout='vertical'>
                <Form.Item label='email' name='username' rules={[{ required: true }]}>
                    <Input placeholder='Please enter email address' clearable />
                </Form.Item>
                <Form.Item
                    label='password' name='password' rules={[{ required: true }]}
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
                        placeholder='Please enter password'
                        clearable
                        type={visible ? 'text' : 'password'}
                    />
                </Form.Item>
            </Form>
        </div >
        <div>
            <Button className="antdog-btn full">Login</Button>
        </div>
        <div className="d-flex justify-content-between align-items-center">
            <div onClick={() => navigate(REGISTER_PATH)}>Sign up</div>
            <div onClick={() => navigate(FORGET_PASSWORD_PATH)}>Forget Password</div>
        </div>
    </>
}