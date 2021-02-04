import React from 'react';
import styled from 'styled-components';
import ButtonArea from './ButtonArea';
import InputArea from './InputArea';
import Palette from './Palette';
import SelectArea from './SelectArea';
import TextBannerPreview from './TextBannerPreview';

const TextBannerMaker = (props) => {
  return (
    <TextBannerMakerStyledWrapper>
      <TextBannerPreview />
      <InputArea />
      <SelectArea />
      <Palette />
      <ButtonArea />
    </TextBannerMakerStyledWrapper>
  );
};

export default TextBannerMaker;

const TextBannerMakerStyledWrapper = styled.div`
  text-align: center;
  box-sizing: border-box;
  margin-top: 30px;
`;
