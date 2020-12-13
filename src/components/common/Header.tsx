import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AppLogo, InstagramLogo, NaverLogo } from '../../static/svg';

interface HeaderBlockProps {
  isScrollTop?: boolean;
}

const Block = styled.nav<HeaderBlockProps>`
  width: 100vw;
  height: 80px;
  padding: 0 20px;
  position: fixed;
  z-index: 10001;
  top: 0;
  left: 0;
  background-color: ${(props) => !props.isScrollTop && 'white'};

  transition: background-color 300ms ease-in-out;
`;

const Inner = styled.div`
  display: flex;
  width: 100%;
  height: inherit;
  align-items: center;
  max-width: 1280px;
  justify-content: space-between;
  margin: 0 auto;
`;

const SNSBlock = styled.nav`
  display: flex;
`;

const SNSIcoWrapper = styled.div`
  margin: 0 5px;
`;

const Header: React.FC = () => {
  const [isSrollTop, setIsScrollTop] = useState(true);
  useEffect(() => {
    const listenScroll = () => {
      if (window.pageYOffset > 58) setIsScrollTop(false);
      else setIsScrollTop(true);
    };
    window.addEventListener('scroll', listenScroll);

    return () => window.removeEventListener('scroll', listenScroll);
  }, []);

  return (
    <Block isScrollTop={isSrollTop}>
      <Inner>
        <AppLogo />
        <SNSBlock>
          <SNSIcoWrapper>
            <NaverLogo
              width={29}
              height={29}
              onClick={() =>
                window.open('https://blog.naver.com/makeforyou7', '_blank')
              }
            />
          </SNSIcoWrapper>
          <SNSIcoWrapper>
            <InstagramLogo
              width={29}
              height={29}
              onClick={() =>
                window.open(
                  'https://www.instagram.com/makeforyou.kr/',
                  '_blank',
                )
              }
            />
          </SNSIcoWrapper>
        </SNSBlock>
      </Inner>
    </Block>
  );
};

export default Header;
