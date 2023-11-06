import { useEffect } from 'react';
import './scss/App.scss'

function App() {

  useEffect(() => {
    /**
     * 使用 动态 rem 方案
     * 即 1rem 即 1px
     */
    const WIDTH = 750;
    const setView = () => {
      document.documentElement.style.fontSize =
        (10 * screen.width) / WIDTH + "px";
    };
    window.onorientationchange = setView;
    setView();
  }, []);

  return (
    <div>
      todo list
      - UI 库：Ant Design Mobile
      - https://mobile.ant.design/zh/components/

      - 状态管理以及数据：ahooks
      - https://ahooks.gitee.io/zh-CN/guide
    </div>
  )
}

export default App
