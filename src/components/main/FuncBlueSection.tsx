import React from 'react';
import styled from 'styled-components';
import media from '../../lib/media';
import BlueSection from './BlueSection';

const SectionItem = styled.span`
  color: white;
  font-weight: bold;
  font-size: 3rem;

  ${media.mobile} {
    font-size: 10px;
  }
`;

const FuncBlueSection: React.FC = () => {
  return (
    <BlueSection
      firstSection={<SectionItem>공장 검색</SectionItem>}
      secondSection={<SectionItem>온라인 거래</SectionItem>}
      thirdSection={<SectionItem>커뮤니티</SectionItem>}
    />
  );
};

export default FuncBlueSection;
