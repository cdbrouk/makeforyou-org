import React from 'react';
import Footer from '../components/common/Footer';
import PageTemplate from '../components/common/PageTemplate';
import FirstSection from '../components/main/FirstSection';
import SecondSection from '../components/main/SecondSection';
import ThirdSection from '../components/main/ThirdSection';

const IndexPage: React.FC = () => {
  return (
    <PageTemplate>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Footer />
    </PageTemplate>
  );
};

export default IndexPage;
