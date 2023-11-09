import HomeComponent from '../views/HomeComponent'
import {
  CLOSE_ACCOUNT_PATH,
  FORGET_PASSWORD_PATH,
  HOME_PATH,
  LOGIN_PATH,
  ORDER_DETAIL_PATH,
  ORDER_LIST_PATH,
  ORDER_PATH,
  REGISTER_PATH,
  WITHDRAW_DEPOSIT_DETAIL_PATH,
  WITHDRAW_DEPOSIT_PATH
} from './path'

interface RootRoutes {
  name: string
  path: string
  Ele: () => JSX.Element
}

const routes: RootRoutes[] = [
  {
    name: '主页',
    path: HOME_PATH,
    Ele: HomeComponent
  },
  {
    name: '登录',
    path: LOGIN_PATH,
    Ele: HomeComponent
  },
  {
    name: '注册',
    path: REGISTER_PATH,
    Ele: HomeComponent
  },
  {
    name: '忘记密码',
    path: FORGET_PASSWORD_PATH,
    Ele: HomeComponent
  },
  {
    name: '注销账户',
    path: CLOSE_ACCOUNT_PATH,
    Ele: HomeComponent
  },
  {
    name: '礼品卡下单',
    path: ORDER_PATH,
    Ele: HomeComponent
  },
  {
    name: '订单详情',
    path: ORDER_DETAIL_PATH,
    Ele: HomeComponent
  },
  {
    name: '提现下单',
    path: WITHDRAW_DEPOSIT_PATH,
    Ele: HomeComponent
  },
  {
    name: '提现详情',
    path: WITHDRAW_DEPOSIT_DETAIL_PATH,
    Ele: HomeComponent
  },
  {
    name: '订单管理',
    path: ORDER_LIST_PATH,
    Ele: HomeComponent
  }
]

export default routes
