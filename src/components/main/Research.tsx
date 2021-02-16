import React from 'react';
import styled from 'styled-components';
import media from '../../lib/media';
import ResearchBackgroundImageSrc from '../../static/img/research_background.png';
import ResearchImageSrc from '../../static/img/research.png';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 703px;
  background-image: url(${ResearchBackgroundImageSrc});
  background-size: cover;
  color: white;
  font-size: 2.8rem;
  font-weight: normal;

  ${media.mobile} {
    height: 130px;
    font-size: 10px;
  }
`;

const ResearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ResearchImage = styled.img.attrs({
  src: ResearchImageSrc,
  alt: 'research_image',
})`
  width: 170px;
  height: 219px;

  ${media.mobile} {
    width: 30px;
    height: 39px;
  }
`;

const Research: React.FC = () => {
  return (
    <Wrapper
      onClick={() =>
        (window.location.href =
          'https://www.notion.so/MAKE-4-U-b578052cc8ca41579711bf54fd19e3be')
      }
    >
      <ResearchWrapper>
        <p>공장 입점 설문조사하고</p>
        <ResearchImage />
        <p> 다양한 선물 받아가세요</p>
      </ResearchWrapper>
    </Wrapper>
  );
};

export default Research;
