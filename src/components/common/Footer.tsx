import React from 'react';
import styled from 'styled-components';
import { P1, SPAN } from '../../lib/style/typography';

const Wrapper = styled.footer`
  background-color: black;
  color: white;
`;

const Inner = styled.div`
  padding: 64px 32px;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled(P1)`
  margin-top: 34px;
  font-weight: 500;
`;

const LabelItem = styled(SPAN)`
  margin-bottom: 16px;
`;

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Inner>
        <LabelWrapper>
          <Label>CONTACTS</Label>
          <LabelItem>TEL 010-6838-6571</LabelItem>
          <LabelItem>FAX 0504-230-1751</LabelItem>
          <LabelItem>EMAIL makeforyou7@gmail.com</LabelItem>
        </LabelWrapper>
        <LabelWrapper>
          <Label>ADDRESS</Label>
          <LabelItem>
            경기도 고양시 일산동구 무궁화로 43-15 <br />
            한길세이프빌 102호
          </LabelItem>
        </LabelWrapper>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
