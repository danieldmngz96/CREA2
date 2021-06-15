import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../containers/Layout'
import DashboardLayout from '../containers/DashboardLayout'
import Dashboard from '../pages/Dashboard';
import Payments from '../pages/Dashboard/Payments';
import Progress from '../pages/Dashboard/Progress';
import Schedule from '../pages/Dashboard/Schedule';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Planes from '../pages/Planes';
import '../styles/index.css';


const App = () => {
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  const email = document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  const user = {};

  if (token && email) {
    user.token = token;
    user.email = email;
  }

  return (
    <>
      {Object.keys(user).length === 0 && (
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/Planes' component={Planes} />
            </Switch>
          </Layout>
        </BrowserRouter>
      )}
      {Object.keys(user).length !== 0 && (
        <BrowserRouter>
          <DashboardLayout>
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/dashboard/progress' component={Progress} />
              <Route exact path='/dashboard/payments' component={Payments} />
              <Route exact path='/dashboard/schedule' component={Schedule} />
            </Switch>
          </DashboardLayout>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;