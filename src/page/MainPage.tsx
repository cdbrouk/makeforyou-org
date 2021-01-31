import React from 'react';
import PageTemplate from '../components/common/PageTemplate';
import Banner from '../components/main/Banner';
import FirstLayout from '../components/main/FirstLayout';
import FuncBlueSection from '../components/main/FuncBlueSection';
import InfoBlueSection from '../components/main/InfoBlueSection';
import Intro from '../components/main/Intro';
import Research from '../components/main/Research';
import SecondLayout from '../components/main/SecondLayout';

const MainPage: React.FC = () => (
  <PageTemplate>
    <Intro />
    <Banner />
    <FirstLayout />
    <FuncBlueSection />
    <SecondLayout />
    <Research />
    <InfoBlueSection />
  </PageTemplate>
);

export default MainPage;
