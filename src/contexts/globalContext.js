import React, { createContext, useState } from 'react';
import { FONTS } from '../common/constants';
import { getContrastYIQ, getRandomHexColor } from '../common/utils';

/**
 * @description 전역 state context api
 */
const GlobalContext = createContext({
  state: {
    canvasText: '',
    canvasFontSize: '',
    canvasFontFamily: '',
    canvasWidth: '',
    canvasHeight: '',
    canvasBackgroundColor: '',
    canvasFontColor: '',
    canvasImageDownlink: '',
  },
  actions: {
    setCanvasText: () => {},
    setCanvasFontSize: (fontSize) => {},
    setCanvasFontFamily: (fontFamily) => {},
    setCanvasWidth: (width) => {},
    setCanvasHeight: (height) => {},
    setCanvasBackgroundColor: (hex) => {},
    setCanvasFontColor: (hex) => {},
    setCanvasImageDownlink: (link) => {},
  },
});

/**
 * @param {*} param0 {children} 하위 리액트 컴포넌트
 * @description 전역 context provider
 */
const GlobalProvider = ({ children }) => {
  const initColor = getRandomHexColor();
  const contrastColor = getContrastYIQ(initColor.slice(-6));

  const [canvasText, setCanvasText] = useState('');
  const [canvasFontSize, setCanvasFontSize] = useState('40');
  const [canvasFontFamily, setCanvasFontFamily] = useState(FONTS.HELVETICA);
  const [canvasWidth, setCanvasWidth] = useState(620);
  const [canvasHeight, setCanvasHeight] = useState(435);
  const [canvasBackgroundColor, setCanvasBackgroundColor] = useState(initColor);
  const [canvasFontColor, setCanvasFontColor] = useState(contrastColor);
  const [canvasImageDownlink, setCanvasImageDownlink] = useState('');

  const value = {
    state: {
      canvasText,
      canvasFontSize,
      canvasFontFamily,
      canvasWidth,
      canvasHeight,
      canvasBackgroundColor,
      canvasFontColor,
      canvasImageDownlink,
    },
    actions: {
      setCanvasText,
      setCanvasFontSize,
      setCanvasFontFamily,
      setCanvasWidth,
      setCanvasHeight,
      setCanvasBackgroundColor,
      setCanvasFontColor,
      setCanvasImageDownlink,
    },
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export { GlobalContext, GlobalProvider };
