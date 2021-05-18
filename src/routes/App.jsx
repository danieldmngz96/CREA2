import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../containers/Layout'
import Home from '../pages/Home';
import Login from '../pages/Login';
import '../styles/index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;