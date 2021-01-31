import React from 'react';
import styled from 'styled-components';

const PageBlock = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PageTemplate: React.FC = ({ children }) => (
  <PageBlock>{children}</PageBlock>
);

export default PageTemplate;
