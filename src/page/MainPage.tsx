import React from 'react';
import PageTemplate from '../components/common/PageTemplate';
import Comment from '../components/main/Comment';
import Footer from '../components/main/Footer';
import Intro from '../components/main/Intro';
import KakaoMap from '../components/main/KakaoMap';
import Submit from '../components/main/Submit';

const MainPage: React.FC = () => (
  <PageTemplate>
    <Intro />
    <Comment />
    <KakaoMap />
    <Submit />
    <Footer />
  </PageTemplate>
);

export default MainPage;
