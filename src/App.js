import React from 'react';
import GlobalStyle from 'styles/GlobalStyle';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes, { renderRoutes } from '../src/routes';
import { createBrowserHistory } from 'history';
import Home from './Home';
import Footer from 'components/Footer';
const history = createBrowserHistory();
const App = () => {
  return (
    <>
      <BrowserRouter history={history}>
        <GlobalStyle />
        {renderRoutes(routes)}
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
