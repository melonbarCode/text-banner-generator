import React from 'react';
import styled from 'styled-components';


const PORTFOLIO = "https://melonbarcode.site/";

/**
 * @param {*} props
 * @description Navigation Bar 컴포넌트
 */
const Navbar = (props) => {
  const linklist = [
    {
      label: 'INTRODUCE SITE',
      onClick: () => {
        window.open(`${PROFILE_LINK}/banner-maker`);
      },
    },
    {
      label: 'GIT',
      onClick: () => {
        window.open(`${PROFILE_LINK}/banner-maker`);
      },
    },
  ];

  return (
    <NavbarStyledWrapper>
      <ul className='nav-link-list'>
        {linklist.map((linkItem) => (
          <li className='nav-list-item'>{linkItem.label}</li>
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
  }

  .nav-list-item:hover {
    opacity: 0.5;
  }
`;

export default Navbar;
