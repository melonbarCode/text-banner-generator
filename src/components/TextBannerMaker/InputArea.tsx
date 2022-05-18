import React from 'react';
import styled from 'styled-components';
import BannerTextInputBox from './BannerTextInputBox';
import BannerCanvasInputBox from './BannerCanvasInputBox';

/**
 * @param {*} props
 * @description Input Area 컴포넌트
 */
const InputArea = () => {
  return (
    <InputAreaStyledWrapper>
      <BannerTextInputBox />
      <BannerCanvasInputBox />
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
