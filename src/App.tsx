import React from 'react';
import 'antd/dist/antd.css';
import './styles/App.scss';
import Header from './components/Header';
import Navbar from './components/Navbar';
import TextBannerMaker from './components/TextBannerMaker';
import { GlobalProvider } from './contexts/globalContext';

/**
 * @description 초기 상위 컴포넌트 진입점
 */
function App() {
  return (
    <GlobalProvider>
      <div className='App'>
        <Navbar />
        <Header />
        <TextBannerMaker />
      </div>
    </GlobalProvider>
  );
}

export default App;
