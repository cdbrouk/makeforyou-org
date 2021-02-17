import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import color from '../../lib/style/color';
import { MOBILE_HEADER, PC_HEADER } from '../../lib/style/constant';
import media from '../../lib/style/media';
import { H3, P1 } from '../../lib/style/typography';

const Wrapper = styled.section`
  background-color: ${color.basic};
  padding-top: ${PC_HEADER}px;
  padding-bottom: 48px;

  ${media.mobile} {
    padding-top: ${MOBILE_HEADER}px;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface IIntro {
  isShow: boolean;
}

const IntroFade = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const Intro = styled(H3)<IIntro>`
  color: black;
  text-align: center;
  font-weight: 400;
  margin-top: 34px;
  visibility: ${(props) => (props.isShow ? 'visible' : 'hidden')};
  ${(props) =>
    props.isShow &&
    css`
      animation: ${IntroFade} 1s linear;
    `}
  transition: visibility 1s linear;
`;

const IntroSub = styled(P1)<IIntro>`
  color: black;
  text-align: center;
  visibility: ${(props) => (props.isShow ? 'visible' : 'hidden')};
  transition: visibility 1s linear;
  ${(props) =>
    props.isShow &&
    css`
      animation: ${IntroFade} 1s linear;
    `}
`;

const Button = styled.a`
  width: 183px;
  height: 42px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin: 14px 0;

  text-decoration: none;
  cursor: pointer;
`;

const FirstSection: React.FC = () => {
  const [firstDisplay, setFirstDisplay] = React.useState<boolean>(false);
  const [secondDisplay, setSecondDisplay] = React.useState<boolean>(false);

  React.useEffect(() => {
    setFirstDisplay(true);
    setTimeout(() => setSecondDisplay(true), 500);
  }, []);

  return (
    <Wrapper>
      <Inner>
        <Intro isShow={firstDisplay}>
          MAKE4U에서
          <br />
          편하게 공장을 찾아보세요
        </Intro>
        <IntroSub isShow={secondDisplay}>
          MAKE4U에 등록된
          <br />
          공장을 검색하여
          <br />
          제품을 손쉽게 만드세요
        </IntroSub>
        <Button href="https://m.blog.naver.com/PostList.nhn?permalink=permalink&blogId=wqmn1212&proxyReferer=https:%2F%2Fmakeforyou.org%2F">
          공장 찾아보기
        </Button>
      </Inner>
    </Wrapper>
  );
};

export default FirstSection;
