import React from 'react';
import styled from 'styled-components';
import FontFamilySelectBox from './FontFamilySelectBox';
import FontSizeSelectBox from './FontSizeSelectBox';

const SelectAreaStyledWrapper = styled.div`
  display: flex;
  text-align: center;
  box-sizing: border-box;
  justify-content: center;

  .font-select {
    width: 300px;
    margin: 10px;
    box-sizing: border-box;
  }
`;

/**
 * @description Select Area 컴포넌트
 */
function SelectArea() {
  return (
    <SelectAreaStyledWrapper>
      <FontFamilySelectBox />
      <FontSizeSelectBox />
    </SelectAreaStyledWrapper>
  );
}

export default SelectArea;
