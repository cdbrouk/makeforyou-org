import React from 'react';
import styled from 'styled-components';
import media from '../../lib/media';

interface BlueSectionProps {
  firstSection: React.ReactNode;
  secondSection: React.ReactNode;
  thirdSection: React.ReactNode;
}

const Wrapper = styled.section`
  width: 100%;
  height: 360px;
  display: flex;

  ${media.mobile} {
    height: 67.5px;
  }
`;

interface InnerWrapperProps {
  backgroundColor: string;
}

const InnerWrapper = styled.div<InnerWrapperProps>`
  width: 33.2%;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
`;

const BlueSection: React.FC<BlueSectionProps> = ({
  firstSection,
  secondSection,
  thirdSection,
}) => {
  return (
    <Wrapper>
      <InnerWrapper backgroundColor="#192c8f">{firstSection}</InnerWrapper>
      <InnerWrapper backgroundColor="#0d1d6e">{secondSection}</InnerWrapper>
      <InnerWrapper backgroundColor="#09113b">{thirdSection}</InnerWrapper>
    </Wrapper>
  );
};

export default BlueSection;
