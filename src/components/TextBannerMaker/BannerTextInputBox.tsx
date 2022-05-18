import React, { ChangeEventHandler, useContext } from 'react';
import { GlobalContext } from '../../contexts/globalContext';
import { Input } from 'antd';

export default function BannerTextInputBox() {
  const PLACEHOLDER_TEXT = "텍스트를 입력해주세요! ' 3')/";
  const { state, actions } = useContext(GlobalContext);
  const { canvasText } = state;
  const { setCanvasText } = actions;

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const bannerText = e.target.value;
    setCanvasText(bannerText);
  };

  return (
    <Input
      onChange={handleChangeInput}
      value={canvasText}
      className='banner-title-input'
      size='large'
      placeholder={PLACEHOLDER_TEXT}
    />
  );
}
