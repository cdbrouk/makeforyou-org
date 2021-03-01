import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../lib/style/constant';
import media from '../../lib/style/media';

const Wrapper = styled.footer`
  width: 100vw;
  height: auto;
  background-color: black;
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${COLORS.purple_text};
  line-height: 150%;
  font-weight: 400;
  font-size: 1rem;
  padding: 72px 0;

  ${media.mobile} {
    padding: 48px;
  }
`;

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Inner>
        TEL | 010-6838-6571
        <br />
        FAX | 0504-230-1751
        <br />
        EMAIL | makeforyou7@gmail.com
        <br />
        <br />
        <br />
        <br />
        경기도 고양시 일산동구 성현로 155-13
      </Inner>
    </Wrapper>
  );
};

export default Footer;
