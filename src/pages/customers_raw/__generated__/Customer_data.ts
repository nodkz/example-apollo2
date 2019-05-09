/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Customer_data
// ====================================================

export interface Customer_data_orderList {
  __typename: "Order";
  orderID: number | null;
}

export interface Customer_data {
  __typename: "Customer";
  companyName: string | null;
  orderList: (Customer_data_orderList | null)[] | null;
}
