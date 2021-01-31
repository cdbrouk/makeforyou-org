import React from 'react';
import styled from 'styled-components';
import media from '../../lib/media';

const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  width: 100%;
  height: 314px;
  color: white;
  font-size: 1.8rem;
  line-height: 2.5rem;
  text-align: center;
  font-weight: 200;

  ${media.mobile} {
    height: 57.6px;
    font-size: 12px;
    line-height: 1rem;
  }
`;

const Banner: React.FC = () => {
  return (
    <BannerWrapper>
      다양한 공장이 모여있는 MAKE4U에서
      <br />
      편하게 공장을 찾아보세요
    </BannerWrapper>
  );
};

export default Banner;
