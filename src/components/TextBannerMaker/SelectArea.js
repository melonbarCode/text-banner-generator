import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../contexts/globalContext';
import { Select } from 'antd';
const { Option } = Select;

/**
 * @param {*} props
 * @description Select Area 컴포넌트
 */
const SelectArea = (props) => {
  const fontSizeList = [10, 20, 30, 40, 50, 60, 80, 100, 110, 120, 150, 180, 200];
  const fontFamilyList = ['Helvetica'];

  const { state, actions } = useContext(GlobalContext);
  const { canvasFontSize, canvasFontFamily } = state;
  const { setCanvasFontSize, setCanvasFontFamily } = actions;

  const FontFamilySelect = useMemo(
    () => (
      <Select value={canvasFontFamily} onChange={(value) => setCanvasFontFamily(value)} className='font-select'>
        {fontFamilyList.map((fontFamily) => (
          <Option key={fontFamily} value={fontFamily}>
            {fontFamily}
          </Option>
        ))}
      </Select>
    ),
    [fontFamilyList, canvasFontFamily, setCanvasFontFamily],
  );

  const FontSizeSelect = useMemo(
    () => (
      <Select value={canvasFontSize} onChange={(value) => setCanvasFontSize(value)} className='font-select'>
        {fontSizeList.map((fontSize) => (
          <Option key={fontSize} value={fontSize}>
            {fontSize}
          </Option>
        ))}
      </Select>
    ),
    [fontSizeList, canvasFontSize, setCanvasFontSize],
  );

  return (
    <SelectAreaStyledWrapper>
      {FontFamilySelect}
      {FontSizeSelect}
    </SelectAreaStyledWrapper>
  );
};

const SelectAreaStyledWrapper = styled.div`
  text-align: center;
  box-sizing: border-box;

  .font-select {
    width: 300px;
    margin: 10px;
    box-sizing: border-box;
  }
`;

export default SelectArea;
