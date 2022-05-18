import styled from 'styled-components';

export const NavbarStyledWrapper = styled.div`
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
