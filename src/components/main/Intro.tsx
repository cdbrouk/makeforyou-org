import React from 'react';
import styled from 'styled-components';
import IntroImg from '../../static/img/intro.jpg';

const IntroBlock = styled.section`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 66.666%;
`;

const IntroResponsiveBlock = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

interface IntroTextBlockProps {
  isRendered?: boolean;
}

const IntroTextBlock = styled.div<IntroTextBlockProps>`
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: white;
  font-weight: bold;
  z-index: 1001;
`;

const IntroTextBold = styled.span`
  font-size: 1.2em;
  text-align: center;

  @media (min-width: 420px) {
    font-size: 2rem;
  }
`;

const IntroImage = styled.img.attrs({
  src: IntroImg,
  alt: 'intro',
})`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Intro: React.FC = () => {
  return (
    <IntroBlock>
      <IntroResponsiveBlock>
        <IntroTextBlock>
          <IntroTextBold>
            제조업 공장 전문 플랫폼 <br />
            MAKE 4 U 에 오신것을 환영합니다
          </IntroTextBold>
        </IntroTextBlock>
        <IntroImage />
      </IntroResponsiveBlock>
    </IntroBlock>
  );
};

export default Intro;
