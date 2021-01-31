import React from 'react';
import styled from 'styled-components';
import media from '../../lib/media';
import IntroImageSrc from '../../static/img/main_image.png';
import WhiteLogoSrc from '../../static/img/white_logo.png';

interface IntroWrapperProps {
  imgUrl: string;
}

const IntroWrapper = styled.div<IntroWrapperProps>`
  position: relative;
  margin-top: 66px;
  width: 100%;
  height: 1024px;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  max-height: 1024px;

  ${media.mobile} {
    margin-top: 33px;
    height: 204px;
  }
`;
const IntroMask = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(43, 43, 43, 0.8);
`;

const LogoImage = styled.img.attrs({
  src: WhiteLogoSrc,
  alt: 'white_logo',
})`
  width: 45%;
`;

const Intro: React.FC = () => {
  return (
    <IntroWrapper imgUrl={IntroImageSrc}>
      <IntroMask>
        <LogoImage />
      </IntroMask>
    </IntroWrapper>
  );
};

export default Intro;
