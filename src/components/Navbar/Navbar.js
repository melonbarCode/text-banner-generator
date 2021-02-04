import React from 'react';
import styled from 'styled-components';

const PORTFOLIO_LINK = 'https://melonbarcode.site/';
const TEXT_BANNER_GENERATOR_GIT_LINK = 'https://github.com/melonbarCode/text-banner-generator';

/**
 * @param {*} props
 * @description Navigation Bar 컴포넌트
 */
const Navbar = (props) => {
  const linklist = [
    {
      label: 'INTRODUCE SITE',
      onClick: () => {
        window.open(PORTFOLIO_LINK);
      },
    },
    {
      label: 'GIT',
      onClick: () => {
        window.open(TEXT_BANNER_GENERATOR_GIT_LINK);
      },
    },
  ];

  return (
    <NavbarStyledWrapper>
      <ul className='nav-link-list'>
        {linklist.map((linkItem) => (
          <li key={linkItem.label} className='nav-list-item' onClick={linkItem.onClick}>
            {linkItem.label}
          </li>
        ))}
      </ul>
    </NavbarStyledWrapper>
  );
};

const NavbarStyledWrapper = styled.div`
  text-align: right;
  padding: 10px;

  .nav-link-list {
    display: inline-flex;
  }

  .nav-list-item {
    box-sizing: border-box;
    display: inline-block;
    padding: 20px;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
    cursor: pointer;
  }

  .nav-list-item:hover {
    opacity: 0.5;
  }
`;

export default Navbar;
