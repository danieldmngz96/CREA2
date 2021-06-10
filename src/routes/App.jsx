import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../containers/Layout'
import Dashboard from '../pages/Dashboard';
import Payments from '../pages/Dashboard/Payments';
import Progress from '../pages/Dashboard/Progress';
import Schedule from '../pages/Dashboard/Schedule';
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
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/dashboard/progress' component={Progress} />
          <Route exact path='/dashboard/payments' component={Payments} />
          <Route exact path='/dashboard/schedule' component={Schedule} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;