/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: OrdersTestQuery
// ====================================================

export interface OrdersTestQuery_viewer_category {
  __typename: "Category";
  description: string | null;
  name: string | null;
}

export interface OrdersTestQuery_viewer_orderPagination_items_customer_orderList {
  __typename: "Order";
  orderID: number | null;
}

export interface OrdersTestQuery_viewer_orderPagination_items_customer {
  __typename: "Customer";
  companyName: string | null;
  orderList: (OrdersTestQuery_viewer_orderPagination_items_customer_orderList | null)[] | null;
}

export interface OrdersTestQuery_viewer_orderPagination_items {
  __typename: "Order";
  orderID: number | null;
  customerID: string | null;
  customer: OrdersTestQuery_viewer_orderPagination_items_customer | null;
}

export interface OrdersTestQuery_viewer_orderPagination {
  __typename: "OrderPagination";
  count: number | null;
  items: (OrdersTestQuery_viewer_orderPagination_items | null)[] | null;
}

export interface OrdersTestQuery_viewer_regionList {
  __typename: "Region";
  name: string | null;
}

export interface OrdersTestQuery_viewer {
  __typename: "Viewer";
  category: OrdersTestQuery_viewer_category | null;
  orderPagination: OrdersTestQuery_viewer_orderPagination | null;
  regionList: (OrdersTestQuery_viewer_regionList | null)[] | null;
}

export interface OrdersTestQuery {
  viewer: OrdersTestQuery_viewer | null;
}
