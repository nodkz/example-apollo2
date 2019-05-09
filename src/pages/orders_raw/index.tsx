import React from 'react';
import { Query } from 'react-apollo';
import { RouteComponentProps } from 'react-router-dom';
import gql from 'graphql-tag';
import { OrdersTestQuery as R } from './__generated__/OrdersTestQuery';

interface Props extends RouteComponentProps {}

class TypedQuery extends Query<R> {}

export default function Orders(props: Props) {
  return (
    <TypedQuery
      query={gql`
        query OrdersTestQuery {
          viewer {
            category {
              description
              name
            }
            orderPagination(perPage: 3, page: 1, sort: ORDERID_ASC) {
              count
              items {
                orderID
                customerID
                customer {
                  companyName
                  orderList {
                    orderID
                  }
                }
              }
            }
            regionList {
              name
            }
          }
        }
      `}
    >
      {({ error, loading, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>{error.message}</div>;
        if (data)
          return (
            <div>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          );
      }}
    </TypedQuery>
  );
}
