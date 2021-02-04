import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../contexts/globalContext';
import { Button } from 'antd';

/**
 * @param {*} props
 * @description Button Area 컴포넌트
 */
const ButtonArea = (props) => {
  const { state } = useContext(GlobalContext);
  const { canvasImageDownlink, canvasText } = state;

  const DownloadBtn = useMemo(
    () => (
      <a href={canvasImageDownlink} download={`${canvasText.split(' ').join('_')}.png`}>
        <Button className='download-btn'>Download</Button>
      </a>
    ),
    [canvasImageDownlink, canvasText],
  );

  return <ButtonAreaStyledWrapper>{DownloadBtn}</ButtonAreaStyledWrapper>;
};

const ButtonAreaStyledWrapper = styled.div`
  text-align: center;
  box-sizing: border-box;

  .download-btn {
    width: 100px;
  }
`;

export default ButtonArea;
