import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/globalContext';
import { Select } from 'antd';

const { Option } = Select;

/**
 * @description Select Area 컴포넌트
 */
const FontFamilySelectBox = () => {
  const fontFamilyList: string[] = ['Helvetica'];
  const { state, actions } = useContext(GlobalContext);
  const { canvasFontFamily } = state;
  const { setCanvasFontFamily } = actions;

  const handleChangeSelect = (value: string) => setCanvasFontFamily(value);

  return (
    <div>
      <div>
        <label>폰트 종류</label>
      </div>
      <Select value={canvasFontFamily} onChange={handleChangeSelect} className='font-select'>
        {fontFamilyList.map((fontFamily) => (
          <Option key={fontFamily} value={fontFamily}>
            {fontFamily}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default FontFamilySelectBox;
