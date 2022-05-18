import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../contexts/globalContext';
import { Button } from 'antd';

/**
 * @description Button Area 컴포넌트
 */
const ButtonArea = () => {
  const DEFAULT_DOWNLOAD_NAME = '제목없음.png';
  const { state } = useContext(GlobalContext);
  const { canvasImageDownlink, canvasText } = state;

  const downloadName = useMemo<string>(() => `${canvasText.split(' ').join('_')}.png` || DEFAULT_DOWNLOAD_NAME, [
    canvasText,
  ]);

  return (
    <ButtonAreaStyledWrapper>
      <a href={canvasImageDownlink} download={downloadName}>
        <Button className='download-btn'>Download</Button>
      </a>
    </ButtonAreaStyledWrapper>
  );
};

const ButtonAreaStyledWrapper = styled.div`
  text-align: center;
  box-sizing: border-box;
  padding-bottom: 100px;

  .download-btn {
    width: 100px;
  }
`;

export default ButtonArea;
