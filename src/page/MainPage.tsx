import React from 'react';
import Footer from '../components/common/Footer';
import { ConsultSection, IntroSection, MapSection } from '../components/main';

const IndexPage: React.FC = () => {
  return (
    <>
      <IntroSection />
      <MapSection />
      <ConsultSection />
      <Footer />
    </>
  );
};

export default IndexPage;
