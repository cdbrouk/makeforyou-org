import React from 'react';
import styled from 'styled-components';
import { MOBILE_HEADER, PC_HEADER } from '../../lib/style/constant';
import media from '../../lib/style/media';

const Wrapper = styled.div`
  padding-top: ${PC_HEADER}px;
  width: 100vw;
  height: 100vh;

  ${media.mobile} {
    padding-top: ${MOBILE_HEADER}px;
  }
`;

const MapComponent: React.FC = () => {
  return <Wrapper>Map</Wrapper>;
};

export default MapComponent;
