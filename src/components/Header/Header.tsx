import React from 'react';
import * as S from './Header.style';

const HEADER_TITLE = '텍스트 배너 생성기';

/**
 * @description Header 컴포넌트
 */
function Header() {
  const handleClickSpan = () => {
    window.location.reload();
  };

  return (
    <S.HeaderStyledWrapper>
      <span className='header-title' onClick={handleClickSpan}>
        {HEADER_TITLE}
      </span>
    </S.HeaderStyledWrapper>
  );
}

export default Header;
