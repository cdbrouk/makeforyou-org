import React from 'react';
import styled from 'styled-components';
import media from '../../lib/media';
import BlueSection from './BlueSection';

const SectionItem = styled.span`
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  line-height: 2rem;

  ${media.mobile} {
    font-size: 10px;
    line-height: 12px;
  }
`;

const InfoBlueSection: React.FC = () => {
  return (
    <BlueSection
      firstSection={
        <SectionItem>
          TEL 010-6838-6571 <br /> FAX 0504-230-1751
        </SectionItem>
      }
      secondSection={
        <SectionItem>
          경기도 고양시 일산동구 <br /> 무궁화로 43-15 한길세이프빌 1027호
        </SectionItem>
      }
      thirdSection={<SectionItem>makeforyou7@gmail.com</SectionItem>}
    />
  );
};

export default InfoBlueSection;
