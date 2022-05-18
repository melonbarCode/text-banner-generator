import React from 'react';
import * as S from './Navbar.style';

const BLOG_LINK = 'https://melonbarcode.vercel.app/';
const PORTFOLIO_LINK = 'https://introduce-page.vercel.app/';
const TEXT_BANNER_GENERATOR_GIT_LINK = 'https://github.com/melonbarCode/text-banner-generator';

/**
 * @description Navigation Bar 컴포넌트
 */
const Navbar = () => {
  const linklist: { label?: string; onClick?: () => void }[] = [
    {
      label: 'BLOG',
      onClick: () => {
        window.open(BLOG_LINK);
      },
    },
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
    <S.NavbarStyledWrapper>
      <ul className='nav-link-list'>
        {linklist.map((linkItem) => (
          <li key={linkItem.label} className='nav-list-item' onClick={linkItem.onClick}>
            {linkItem.label}
          </li>
        ))}
      </ul>
    </S.NavbarStyledWrapper>
  );
};

export default Navbar;
