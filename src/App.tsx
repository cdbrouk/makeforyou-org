import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import Core from './containers/base/Core';
import MainPage from './page/MainPage';
import MapPage from './page/MapPage';

const App = (): JSX.Element => (
  <>
    <Core />
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/map">
          <MapPage />
        </Route>
      </Switch>
    </BrowserRouter>
  </>
);
export default App;
