import styled from 'styled-components';

export const HeaderStyledWrapper = styled.div`
  text-align: center;
  padding: 50px;

  .header-title {
    border: 1px solid #dddddd;
    box-sizing: border-box;
    padding: 30px;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
    margin: 10px;
    cursor: pointer;
  }

  .header-title:hover {
    opacity: 0.7;
  }
`;
