/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: OrderRow_order
// ====================================================

export interface OrderRow_order_employee {
  __typename: "Employee";
  firstName: string | null;
  lastName: string | null;
  birthDate: any | null;
}

export interface OrderRow_order_customer_orderList {
  __typename: "Order";
  orderID: number | null;
}

export interface OrderRow_order_customer {
  __typename: "Customer";
  companyName: string | null;
  orderList: (OrderRow_order_customer_orderList | null)[] | null;
}

export interface OrderRow_order {
  __typename: "Order";
  orderID: number | null;
  orderDate: any | null;
  customerID: string | null;
  employeeID: number | null;
  employee: OrderRow_order_employee | null;
  customer: OrderRow_order_customer | null;
  freight: number | null;
}
