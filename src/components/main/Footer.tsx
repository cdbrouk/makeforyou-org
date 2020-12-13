import React from 'react';
import styled from 'styled-components';

const FooterBlock = styled.footer`
  width: 100%;
  background-color: rgb(247, 247, 247);
  padding: 30px;
  font-size: 0.8rem;
  text-align: center;

  p {
    margin: 1.5rem 0;
  }

  @media (max-width: 420px) {
    text-align: start;
  }
`;

const Footer: React.FC = () => (
  <FooterBlock>
    <p>경기도 고양시 일산동구 성현로 155 -13</p>
    <p>makeforyou7@naver.com</p>
    <p>010-6838-5671</p>
    <p>0504-230-1751</p>
    <p>@2020 make for you</p>
  </FooterBlock>
);

export default Footer;
