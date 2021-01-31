import React from 'react';
import styled from 'styled-components';
import media from '../../lib/media';
import WhiteLayout from './WhiteLayout';
import FirstLayoutImageSrc from '../../static/img/first_layout_background.png';

const LeftTopText = styled.p`
  position: absolute;
  font-size: 3rem;
  top: 174px;
  left: 9%;
  color: #414141;
  font-weight: 200;

  ${media.mobile} {
    font-size: 10px;
    top: 34px;
  }
`;

const LeftBottomText = styled.p`
  position: absolute;
  font-size: 3rem;
  bottom: 174px;
  left: 9%;
  color: #414141;
  font-weight: 200;

  ${media.mobile} {
    font-size: 10px;
    bottom: 34px;
  }
`;

const FirstLayout: React.FC = () => {
  return (
    <WhiteLayout backgroundImage={FirstLayoutImageSrc}>
      <LeftTopText>
        찾기 어려운 제조업 공장 <br />
        MAKE4U에서 <br /> 쉽게 찾으세요
      </LeftTopText>
      <LeftBottomText>
        MAKE4U에 등록된 <br />
        공장을 검색하여 <br />
        제품을 손쉽게 만드세요
      </LeftBottomText>
    </WhiteLayout>
  );
};

export default FirstLayout;
