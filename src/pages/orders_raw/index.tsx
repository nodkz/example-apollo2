import React from 'react';
import { OrdersTestQueryComponent } from '../../__generated__/types';

export default function Orders() {
  return (
    <OrdersTestQueryComponent>
      {({ error, loading, data }) => {
        if (loading) {
          return <div>Loading...</div>;
        } else if (error) {
          return <div>{error.message}</div>;
        } else if (data) {
          return (
            <div>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          );
        } else {
          return null;
        }
      }}
    </OrdersTestQueryComponent>
  );
}
