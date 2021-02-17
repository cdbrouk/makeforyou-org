import React from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PageTemplate: React.FC = ({ children }) => {
  return <PageWrapper>{children}</PageWrapper>;
};

export default PageTemplate;
