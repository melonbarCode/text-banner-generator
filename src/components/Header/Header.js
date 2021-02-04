import React from 'react';
import styled from 'styled-components';

const HEADER_TITLE = 'TEXT BANNER GENERATOR';

/**
 * @param {*} props
 * @description Header 컴포넌트
 */
const Header = (props) => {
  return (
    <HeaderStyledWrapper>
      <span className='header-title'>{HEADER_TITLE}</span>
    </HeaderStyledWrapper>
  );
};

const HeaderStyledWrapper = styled.div`
  text-align: center;
  padding: 50px;

  .header-title {
    border: 1px solid #dddddd;
    box-sizing: border-box;
    padding: 30px;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  .header-title:hover {
    opacity: 0.7;
  }
`;

export default Header;
