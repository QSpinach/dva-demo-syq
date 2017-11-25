import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Details from './routes/Details';
import UserCenter from './routes/UserCenter';

import Users from "./routes/Users.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/users" component={Users} />
      <Route path="/details/:id" component={Details} />
      <Route path="/usercenter" component={UserCenter} />
    </Router>
  );
}

export default RouterConfig;
