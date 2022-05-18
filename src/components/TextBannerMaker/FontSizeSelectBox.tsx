import React, { useContext } from 'react';
import { Select } from 'antd';
import { GlobalContext } from '../../contexts/globalContext';

const { Option } = Select;

function FontSizeSelectBox() {
  const fontSizeList = [10, 20, 30, 40, 50, 60, 80, 100, 110, 120, 150, 180, 200];

  const { state, actions } = useContext(GlobalContext);
  const { canvasFontSize } = state;
  const { setCanvasFontSize } = actions;

  const handleChangeSelect = (value: number) => setCanvasFontSize(value);

  return (
    <div>
      <div>
        <label>폰트 사이즈</label>
      </div>
      <Select value={canvasFontSize} onChange={handleChangeSelect} className='font-select'>
        {fontSizeList.map((fontSize) => (
          <Option key={fontSize} value={fontSize}>
            {fontSize}
          </Option>
        ))}
      </Select>
    </div>
  );
}

export default FontSizeSelectBox;
