import React, { useContext } from 'react';
import PickerIcon from './PickerIcon';
import { PICKER_TYPE } from '../../common/constants';
import { GlobalContext } from '../../contexts/globalContext';
import styled from 'styled-components';
import { BgColorsOutlined, FontColorsOutlined } from '@ant-design/icons';

/**
 * @description 팔레트 컴포넌트 (배경색, 폰트색상)
 */
const Palette = () => {
  const { state, actions } = useContext(GlobalContext);
  const { canvasBackgroundColor, canvasFontColor } = state;
  const { setCanvasBackgroundColor, setCanvasFontColor } = actions;

  return (
    <PaletteStyledWrapper>
      <PickerIcon
        label='배경'
        pickerType={PICKER_TYPE.BACKGROUND}
        hexColor={canvasBackgroundColor}
        iconName='bg-colors'
        Icon={BgColorsOutlined}
        pickerHandler={(value) => setCanvasBackgroundColor(value.hex)}
      />
      <PickerIcon
        label='폰트'
        pickerType={PICKER_TYPE.TEXT}
        hexColor={canvasFontColor}
        iconName='font-colors'
        Icon={FontColorsOutlined}
        pickerHandler={(value) => setCanvasFontColor(value.hex)}
      />
    </PaletteStyledWrapper>
  );
};

const PaletteStyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: '5px';
  justify-content: center;
`;

export default Palette;
