import React from 'react';
import styled from 'styled-components';
import { COLORS, MOBILE_HEADER, PC_HEADER } from '../../lib/style/constant';
import media from '../../lib/style/media';

const Wrapper = styled.section`
  background-color: ${COLORS.theme};
  padding-top: ${PC_HEADER}px;

  ${media.mobile} {
    padding-top: ${MOBILE_HEADER}px;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 48px 0;

  ${media.mobile} {
    align-items: center;
  }
`;

const StaticTitle = styled.p`
  line-height: 150%;
  color: white;
  font-weight: 400;
  text-align: start;
  font-size: 2rem;

  ${media.mobile} {
    line-height: 120%;
    text-align: center;
  }
`;

const StaticTitleSub = styled(StaticTitle)`
  margin-top: 2rem;
  font-weight: 200;
  font-size: 1rem;
`;

const Button = styled.a`
  width: 183px;
  height: 42px;
  background-color: ${COLORS.yellow_button};
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin: 14px 0;
  font-weight: 400;

  text-decoration: none;
  cursor: pointer;
`;

const IntroSection: React.FC = () => {
  return (
    <Wrapper>
      <Inner>
        <StaticTitle>
          제작부터 가공까지
          <br />
          당신을 위한 공장정보
        </StaticTitle>
        <StaticTitleSub>
          MAKE4U에 등록된 공장을 검색하여
          <br />
          제품을 손쉽게 만드세요
        </StaticTitleSub>
        <Button
          href="https://www.notion.so/7e60e7ef79f24da9baf8c68d43e98e6d"
          target="_blank"
        >
          회사 소개
        </Button>
      </Inner>
    </Wrapper>
  );
};

export default IntroSection;
