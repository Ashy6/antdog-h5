import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import routes from './routes';
import NavBarComponent from './components/NavBarComponent';
import SideBarComponent from './views/SideBarComponent';

import './scss/App.scss'

function App() {
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    /**
     * 使用 动态 rem 方案
     * 即 1rem 即 1px
     */
    const WIDTH = 750;
    const setView = () => {
      document.documentElement.style.fontSize =
        (2 * screen.width) / WIDTH + "px";
    };
    window.onorientationchange = setView;
    setView();
  }, []);

  return (
    <div className='full-100'>
      <BrowserRouter>
        <NavBarComponent sideBarOpenCallback={() => setVisible(true)}>
          <SideBarComponent
            visible={visible}
            sideBarCloseCallback={() => setVisible(false)}
          />
        </NavBarComponent>

        <Routes>
          {routes.map(({ path, Ele }, index) => (
            <Route
              key={index}
              path={path}
              element={<Ele />}
            ></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
