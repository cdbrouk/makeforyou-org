import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import Header from './components/common/Header';
import Core from './containers/base/Core';
import MainPage from './page/MainPage';
import MapPage from './page/MapPage';
import { createBrowserHistory } from 'history';

const App = (): JSX.Element => {
  ReactGA.initialize(`${process.env.REACT_APP_GA_TRACKING_ID}`);
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const history = createBrowserHistory();
      history.listen((location: any) => {
        ReactGA.set({ page: location.pathname }); // Update the user's current page
        ReactGA.pageview(location.pathname); // Record a pageview for the given page
      });
    }
  }, [history]);

  return (
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
};

export default App;
