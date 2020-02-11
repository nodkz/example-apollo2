import * as Types from '../../../__generated__/types';

import gql from 'graphql-tag';

export type Customer_dataFragment = (
  { __typename: 'Customer' }
  & Pick<Types.Customer, 'companyName'>
  & { address: Types.Maybe<(
    { __typename: 'CustomerAddress' }
    & Pick<Types.CustomerAddress, 'city'>
  )> }
);

export const Customer_dataFragmentDoc = gql`
    fragment Customer_data on Customer {
  companyName
  address {
    city
  }
}
    `;