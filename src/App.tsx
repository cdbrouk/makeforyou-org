import React from 'react';
import Header from './components/common/Header';
import Core from './containers/base/Core';
import MainPage from './page/MainPage';

const App = (): JSX.Element => (
  <>
    <Core />
    <Header />
    <MainPage />
  </>
);
export default App;
