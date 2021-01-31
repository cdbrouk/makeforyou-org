import React from 'react';
import styled from 'styled-components';
import media from '../../lib/media';
import { AppLogo } from '../../static/svg';

const Wrapper = styled.header`
  width: 100vw;
  height: 66px;
  position: fixed;
  z-index: 10001;
  top: 0;
  left: 0;
  background-color: white;

  ${media.mobile} {
    height: 33px;
  }
`;

const Inner = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: inherit;
  align-items: center;
  justify-content: flex-start;
`;

const AppLogoWrapper = styled.div`
  width: 16.9%;
  padding: 0 2.7%;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RouterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: inherit;
  background-color: #0e1a56;

  ${media.mobile} {
    justify-content: center;
  }
`;

const RouterChip = styled.span`
  color: white;
  margin: 0 4%;
  font-size: 1.2rem;

  ${media.mobile} {
    font-size: 8px;
    margin: 0 8px;
  }
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Inner>
        <AppLogoWrapper>
          <AppLogo />
        </AppLogoWrapper>
        <RouterWrapper>
          <RouterChip>홈페이지소개</RouterChip>
          <RouterChip>사이트 공지</RouterChip>
          <RouterChip>파트너스</RouterChip>
          <RouterChip>블로그</RouterChip>
        </RouterWrapper>
      </Inner>
    </Wrapper>
  );
};

export default Header;
