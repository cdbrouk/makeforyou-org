import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../lib/style/constant';

const Wrapper = styled.section`
  width: 100%;
  height: 300px;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1280px;
  height: auto;
  text-align: center;
  margin: 0 auto;
  padding: 48px 0;
`;

const BoldText = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ConsultButton = styled.a`
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background-color: ${COLORS.purple_button};
  padding: 18px 24px;
  text-decoration: none;
  color: white;
`;

const ConsultSection: React.FC = () => {
  return (
    <Wrapper>
      <Inner>
        <BoldText>설문조사 진행중</BoldText>
        <p style={{ marginBottom: '30px' }}>
          공장입점 설문조사를 하시면 다양한 상품을 드립니다.
        </p>
        <ConsultButton
          href="https://www.notion.so/MAKE-4-U-b578052cc8ca41579711bf54fd19e3be"
          target="_blank"
        >
          설문조사 하러가기
        </ConsultButton>
      </Inner>
    </Wrapper>
  );
};

export default ConsultSection;
