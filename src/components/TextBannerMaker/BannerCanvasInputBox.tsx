import React, { ChangeEventHandler, useContext } from 'react';
import { GlobalContext } from '../../contexts/globalContext';
import { Input } from 'antd';
import styled from 'styled-components';

/**
 * @description Input Area 컴포넌트
 */
export default function BannerCanvasInputBox() {
  const { state, actions } = useContext(GlobalContext);
  const { canvasWidth, canvasHeight } = state;
  const { setCanvasWidth, setCanvasHeight } = actions;

  const handleChangeCanvasWidthInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCanvasWidth(Number(e.target.value));
  };

  const handleChangeCanvasHeightInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCanvasHeight(Number(e.target.value));
  };

  return (
    <BannerCanvasInputBoxStyledWrapper>
      <div>
        <div>
          <label>가로</label>
        </div>
        <Input
          onChange={handleChangeCanvasWidthInput}
          value={canvasWidth}
          className='banner-size-input'
          placeholder='width'
        />
      </div>
      <div>
        <div>
          <label>세로</label>
        </div>
        <Input
          onChange={handleChangeCanvasHeightInput}
          value={canvasHeight}
          className='banner-size-input'
          placeholder='height'
        />
      </div>
    </BannerCanvasInputBoxStyledWrapper>
  );
}

const BannerCanvasInputBoxStyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
