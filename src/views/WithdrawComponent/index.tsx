import { useReactive } from "ahooks";
import { Button, Form, Input } from "antd-mobile";
import UserComponent from "../../components/UserComponent";

import '../users/style.scss'
import './style.scss'

// TODO：组件样式待调整
export default function WithdrawComponent() {
    const formList = useReactive(FormItem)

    return (
        <div className="withdraw-container full-container">
            <UserComponent />
            <p className="px-8 text-center">The withdrawal amount will be credited within 5-120 minutes</p>

            <div className="user-form-card">
                <Form requiredMarkStyle='asterisk'>
                    {formList.map((form) => (
                        <Form.Item key={form.key} name={form.key} label={form.label} rules={form.rules}>
                            <Input placeholder={form.placeholder} />
                        </Form.Item>
                    ))}

                </Form>
            </div>
            <p className="px-8 text-center">If you have problems withdrawing your points. please contact the platfrom's custormer service support.</p>


            <div className='withdraw'>
                <Button className='antdog-btn withdraw-btn'>Withdraw</Button>
            </div>
        </div>
    )
}

export const FormItem = [
    {
        label: 'Points',
        key: 'points',
        placeholder: 'Please enter the points you want to withdraw',
        rules: [{ required: true, message: 'Please enter the points' }],
    },
    {
        label: 'NGN',
        key: 'ngn',
        placeholder: 'Please will be converted based on real-time prices',
        rules: [],
        explain: '1 Point = 784.71 NGN (Current quotes)',
    },
    {
        label: 'Bank',
        key: 'bank',
        placeholder: 'Please enter your bank',
        rules: [{ required: true, message: 'Please enter your bank' }],
    },
    {
        label: 'Bank Account Number',
        key: 'account',
        placeholder: 'Please enter your bank account number',
        rules: [{ required: true, message: 'Please enter your bank account number' }],
    },
    {
        label: 'Name',
        key: 'name',
        placeholder: 'Please enter your name',
        rules: [{ required: true, message: 'Please enter your name' }],
    },
]