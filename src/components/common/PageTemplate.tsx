import React from 'react';
import styled from 'styled-components';

const PageBlock = styled.main``;

const PageTemplate: React.FC = ({ children }) => (
  <PageBlock>{children}</PageBlock>
);

export default PageTemplate;
