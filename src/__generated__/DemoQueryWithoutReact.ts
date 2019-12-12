/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: DemoQueryWithoutReact
// ====================================================

export interface DemoQueryWithoutReact_viewer_orderPagination_items_employee {
  __typename: "Employee";
  firstName: string | null;
  lastName: string | null;
  birthDate: any | null;
}

export interface DemoQueryWithoutReact_viewer_orderPagination_items_customer_orderList {
  __typename: "Order";
  orderID: number | null;
}

export interface DemoQueryWithoutReact_viewer_orderPagination_items_customer {
  __typename: "Customer";
  companyName: string | null;
  orderList: (DemoQueryWithoutReact_viewer_orderPagination_items_customer_orderList | null)[] | null;
}

export interface DemoQueryWithoutReact_viewer_orderPagination_items {
  __typename: "Order";
  orderID: number | null;
  orderDate: any | null;
  customerID: string | null;
  employeeID: number | null;
  employee: DemoQueryWithoutReact_viewer_orderPagination_items_employee | null;
  customer: DemoQueryWithoutReact_viewer_orderPagination_items_customer | null;
  freight: number | null;
}

export interface DemoQueryWithoutReact_viewer_orderPagination_pageInfo {
  __typename: "PaginationInfo";
  pageCount: number | null;
  currentPage: number;
}

export interface DemoQueryWithoutReact_viewer_orderPagination {
  __typename: "OrderPagination";
  count: number | null;
  items: (DemoQueryWithoutReact_viewer_orderPagination_items | null)[] | null;
  pageInfo: DemoQueryWithoutReact_viewer_orderPagination_pageInfo;
}

export interface DemoQueryWithoutReact_viewer {
  __typename: "Viewer";
  orderPagination: DemoQueryWithoutReact_viewer_orderPagination | null;
}

export interface DemoQueryWithoutReact {
  viewer: DemoQueryWithoutReact_viewer | null;
}

export interface DemoQueryWithoutReactVariables {
  page: number;
  perPage: number;
}
