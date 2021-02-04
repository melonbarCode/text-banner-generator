import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../contexts/globalContext';
import { Input } from 'antd';

/**
 * @param {*} props
 * @description Input Area 컴포넌트
 */
const InputArea = (props) => {
  const { state, actions } = useContext(GlobalContext);
  const { canvasText, canvasWidth, canvasHeight } = state;
  const { setCanvasText, setCanvasWidth, setCanvasHeight } = actions;

  const TextInput = useMemo(
    () => (
      <Input
        onChange={(e) => setCanvasText(e.target.value)}
        value={canvasText}
        className='banner-title-input'
        size='large'
        placeholder="TYPE BANNER TITLE ' 3')/ "
      />
    ),
    [canvasText, setCanvasText],
  );

  const SizeInput = useMemo(
    () => (
      <div>
        <Input
          onChange={(e) => setCanvasWidth(e.target.value)}
          value={canvasWidth}
          className='banner-size-input'
          placeholder='width'
        />
        <Input
          onChange={(e) => setCanvasHeight(e.target.value)}
          value={canvasHeight}
          className='banner-size-input'
          placeholder='height'
        />
      </div>
    ),
    [canvasWidth, canvasHeight, setCanvasWidth, setCanvasHeight],
  );

  return (
    <InputAreaStyledWrapper>
      {TextInput}
      {SizeInput}
    </InputAreaStyledWrapper>
  );
};

const InputAreaStyledWrapper = styled.div`
  text-align: center;
  box-sizing: border-box;
  margin-top: 30px;

  .banner-title-input {
    width: 620px;
    margin: 20px;
    background: none;
    border: none;
    border-bottom: 1px solid #dddddd;
    text-align: center;
    color: #dddddd;
  }

  .banner-size-input {
    width: 300px;
    margin: 10px;
    box-sizing: border-box;
  }
`;

export default InputArea;
