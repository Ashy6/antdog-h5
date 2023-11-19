import { Button, Form, Input } from 'antd-mobile'
import UserComponent from '../../../components/UserComponent'

import '../style.scss'

export default function DeregisterComponent() {
    return (
        <>
            <div>
                <UserComponent />
            </div>
            <div className='user-form-card'>
                <Form className='text-align-left' layout='vertical'>
                    <Form.Item
                        label='email'
                        name='email'
                        rules={[{ required: true, message: 'Please enter email address' }]}
                    >
                        <Input placeholder='Please enter email address' clearable />
                    </Form.Item>
                    <Form.Item
                        label='code'
                        name='code'
                        rules={[
                            { required: true, message: 'Please enter verification code' }
                        ]}
                        extra={<Button className='send-btn'>Send code</Button>}
                    >
                        <Input placeholder='Please enter verification code' clearable />
                    </Form.Item>
                </Form>
            </div>
            <div className='px-2-y-1'>
                <Button className='antdog-btn full'>Deregister</Button>
            </div>
        </>
    )
}
