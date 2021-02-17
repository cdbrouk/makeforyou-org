import React from 'react';
import styled from 'styled-components';
import { RiSurveyFill } from 'react-icons/ri';
import { H3 } from '../../lib/style/typography';
import { Button } from './atom/button.element';

const Wrapper = styled.section`
  background-color: white;
  color: black;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 34px 0;
`;

const ThirdSection: React.FC = () => {
  return (
    <Wrapper>
      <Inner>
        <H3>공장입점 설문조사를 하시면</H3>
        <RiSurveyFill size={64} />
        {/* <ListAltIcon style={{ fontSize: 64 }} /> */}
        <H3>다양한 선물을 드립니다</H3>
        <Button href="https://www.notion.so/MAKE-4-U-b578052cc8ca41579711bf54fd19e3be">
          설문조사 하러가기
        </Button>
      </Inner>
    </Wrapper>
  );
};

export default ThirdSection;
