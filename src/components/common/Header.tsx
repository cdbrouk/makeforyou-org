import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LogoSVG } from '../../assets/svg';
import {
  COLORS,
  HEADER_MAX_WIDTH,
  MOBILE_HEADER,
  PC_HEADER,
} from '../../lib/style/constant';
import media from '../../lib/style/media';

const HeaderWrapper = styled.header`
  width: 100vw;
  height: ${PC_HEADER}px;
  position: fixed;
  background-color: ${COLORS.theme};
  ${media.mobile} {
    height: ${MOBILE_HEADER}px;
  }
  z-index: 1001;
`;

const InnerWrapper = styled.div`
  max-width: ${HEADER_MAX_WIDTH}px;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;

  ${media.mobile} {
    justify-content: flex-start;
    padding: 24px;
  }
`;

const LogoWrapper = styled.a`
  width: auto;
  height: auto;
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <InnerWrapper>
        <Link to="/">
          <LogoWrapper>
            <LogoSVG />
          </LogoWrapper>
        </Link>
      </InnerWrapper>
    </HeaderWrapper>
  );
};

export default Header;
