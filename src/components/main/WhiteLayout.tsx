import React from 'react';
import styled from 'styled-components';
import media from '../../lib/media';

interface WrapperProps {
  backgroundImage?: string;
  backgroundPosition?: 'right bottom' | 'left bottom';
}

const Wrapper = styled.section<WrapperProps>`
  width: 100%;
  height: 1344px;
  background-color: white;
  position: relative;
  background-image: url(${(props) => props.backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
  background-position: ${(props) => props.backgroundPosition};
  ${media.mobile} {
    height: 252px;
  }
`;

const WhiteLayout: React.FC<WrapperProps> = ({
  children,
  backgroundImage,
  backgroundPosition = 'right bottom',
}) => {
  return (
    <Wrapper
      backgroundImage={backgroundImage}
      backgroundPosition={backgroundPosition}
    >
      {children}
    </Wrapper>
  );
};

export default WhiteLayout;
