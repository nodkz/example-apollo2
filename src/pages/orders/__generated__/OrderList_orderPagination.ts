/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: OrderList_orderPagination
// ====================================================

export interface OrderList_orderPagination_items_employee {
  __typename: "Employee";
  firstName: string | null;
  lastName: string | null;
  birthDate: any | null;
}

export interface OrderList_orderPagination_items_customer_orderList {
  __typename: "Order";
  orderID: number | null;
}

export interface OrderList_orderPagination_items_customer {
  __typename: "Customer";
  companyName: string | null;
  orderList: (OrderList_orderPagination_items_customer_orderList | null)[] | null;
}

export interface OrderList_orderPagination_items {
  __typename: "Order";
  orderID: number | null;
  orderDate: any | null;
  customerID: string | null;
  employeeID: number | null;
  employee: OrderList_orderPagination_items_employee | null;
  customer: OrderList_orderPagination_items_customer | null;
  freight: number | null;
}

export interface OrderList_orderPagination_pageInfo {
  __typename: "PaginationInfo";
  pageCount: number | null;
  currentPage: number;
}

export interface OrderList_orderPagination {
  __typename: "OrderPagination";
  count: number | null;
  items: (OrderList_orderPagination_items | null)[] | null;
  pageInfo: OrderList_orderPagination_pageInfo;
}
