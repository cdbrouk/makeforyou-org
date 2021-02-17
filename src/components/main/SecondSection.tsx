import React from 'react';
import styled from 'styled-components';
import media from '../../lib/style/media';
import { H2 } from '../../lib/style/typography';

const Wrapper = styled.section`
  background-color: black;
  color: white;
`;

const Inner = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 320px;

  ${media.mobile} {
    height: 240px;
  }
`;

const SecondSection: React.FC = () => {
  return (
    <Wrapper>
      <Inner>
        <H2>
          MAKE4U에서 <br />
          여러분의 공장을 홍보하세요
        </H2>
      </Inner>
    </Wrapper>
  );
};

export default SecondSection;
