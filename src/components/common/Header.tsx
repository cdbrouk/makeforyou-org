import React from 'react';
import styled from 'styled-components';
import {
  HEADER_MAX_WIDTH,
  MOBILE_HEADER,
  PC_HEADER,
} from '../../lib/style/constant';
import media from '../../lib/style/media';
import MenuIcon from '@material-ui/icons/Menu';

const HeaderWrapper = styled.header`
  width: 100vw;
  height: ${PC_HEADER}px;
  position: fixed;
  background-color: white;

  ${media.mobile} {
    height: ${MOBILE_HEADER}px;
  }
`;

const InnerWrapper = styled.div`
  max-width: ${HEADER_MAX_WIDTH}px;
  height: inherit;
  padding: 0 24px;
  display: flex;
  align-items: center;
  margin: 0 auto;

  ${media.mobile} {
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  font-size: 48px;

  ${media.mobile} {
    font-size: 24px;
  }
`;

const Menu = styled.div`
  display: none;
  ${media.mobile} {
    cursor: pointer;
    display: block;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <InnerWrapper>
        <Logo>MAKE4U</Logo>
        {/* <Menu>
          <MenuIcon style={{ fontSize: 32 }} />
        </Menu> */}
      </InnerWrapper>
    </HeaderWrapper>
  );
};

export default Header;
