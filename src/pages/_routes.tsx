import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from './';
import Error from './_error';
import Orders from './orders/OrderQuery';

export default function AppRoute() {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/orders" component={Orders} />
      {/* <Route path="/products" component={Products} /> */}
      {/* <Route path="/customers" components={Customers} /> */}
      <Route component={Error} />
    </Switch>
  );
}
