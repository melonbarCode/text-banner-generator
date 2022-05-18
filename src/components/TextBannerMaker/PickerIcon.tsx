import React, { useState } from 'react';
import { PICKER_TYPE } from '../../common/constants';
import { getContrastYIQ } from '../../common/utils';
import styled from 'styled-components';
import { ColorResult, SketchPicker } from 'react-color';
import { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';

interface PickerIconProps {
  hexColor: string;
  pickerType: string;
  iconName: string;
  label?: string;
  Icon: React.ForwardRefExoticComponent<AntdIconProps & React.RefAttributes<HTMLSpanElement>>;
  pickerHandler: (value: ColorResult) => void;
}

/**
 *
 * @description picker icon [아이콘]
 *
 * 클릭 시, 색상을 클릭할 수 있는 팔레트가 팝오버 됩니다.
 */
function PickerIcon({ hexColor, pickerType, pickerHandler, label = '', Icon }: PickerIconProps) {
  const [showPicker, setShowPicker] = useState(false);

  const icon = {
    color: pickerType === PICKER_TYPE.BACKGROUND ? getContrastYIQ(hexColor.slice(-6)) : hexColor,
    fontSize: '1.6em',
  };

  const handleClose = () => {
    setShowPicker(false);
  };

  const handleClick = () => {
    setShowPicker(!showPicker);
  };

  const handleChange = (colors: ColorResult) => {
    pickerHandler({ ...colors });
  };

  return (
    <PickerIconStyledWrapper>
      <div className='picker-wrapper'>
        <label className='label'>{label}</label>
        <ColorRectStyledWrapper
          pickerType={pickerType === PICKER_TYPE.BACKGROUND ? hexColor : getContrastYIQ(hexColor.slice(-6))}
          onClick={handleClick}>
          <Icon style={icon} />
        </ColorRectStyledWrapper>
        {showPicker && (
          <div className='popover'>
            <div className='cover' onClick={handleClose} />
            <SketchPicker color={hexColor} onChange={handleChange} />
          </div>
        )}
      </div>
    </PickerIconStyledWrapper>
  );
}

const PickerIconStyledWrapper = styled.div`
  .color-rect {
  }

  .label {
    font-weight: bold;
  }

  .popover {
    position: absolute;
    z-index: 2;
    top: -192px;
    left: -75px;
  }

  .cover {
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }

  .picker-wrapper {
    position: relative;
  }

  .sketch-picker {
    input {
      color: black;
    }
  }
`;

const ColorRectStyledWrapper = styled.div<{ pickerType?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid #fff;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px;
  background-color: ${({ pickerType }) => pickerType || '#000000'};
`;

export default PickerIcon;
