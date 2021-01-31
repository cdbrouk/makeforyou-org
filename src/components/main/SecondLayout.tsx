import React from 'react';
import styled from 'styled-components';
import media from '../../lib/media';
import WhiteLayout from './WhiteLayout';
import SecondLayoutImageSrc from '../../static/img/second_layout_background.png';

const RightTopText = styled.p`
  position: absolute;
  font-size: 3rem;
  top: 174px;
  right: 9%;
  color: #414141;
  font-weight: 200;
  text-align: right;

  ${media.mobile} {
    font-size: 10px;
    top: 34px;
  }
`;

const RightBottomText = styled.p`
  position: absolute;
  font-size: 3rem;
  bottom: 174px;
  right: 9%;
  color: #414141;
  font-weight: 200;
  text-align: right;

  ${media.mobile} {
    font-size: 10px;
    bottom: 34px;
  }
`;

const SecondLayout: React.FC = () => {
  return (
    <WhiteLayout
      backgroundImage={SecondLayoutImageSrc}
      backgroundPosition="left bottom"
    >
      <RightTopText>
        MAKE4U에 <br />
        공장을 등록하고
        <br />
        다양한 혜택을 받으세요
      </RightTopText>
      <RightBottomText>
        MAKE4U에서
        <br />
        여러분의 공장을
        <br />
        홍보하세요
      </RightBottomText>
    </WhiteLayout>
  );
};

export default SecondLayout;
