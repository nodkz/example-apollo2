import React from 'react';
import OrderListQuery from './OrderListQuery';
import { RouteComponentProps } from 'react-router-dom';
import qs from 'qs';

interface Props extends RouteComponentProps {}

export default class OrderRouter extends React.Component<Props> {
  setPage = (page: number) => {
    const { search } = this.props.location;
    const query = qs.parse(search, { ignoreQueryPrefix: true }) || {};

    this.props.history.push({
      search: qs.stringify({ ...query, page }),
    });
  };

  render() {
    const { search } = this.props.location;
    const query = qs.parse(search, { ignoreQueryPrefix: true }) || {};

    const page = parseInt(query.page, 10) || 1;
    const perPage = parseInt(query.perPage, 10) || 10;

    return (
      <div>
        <OrderListQuery page={page} perPage={perPage} onSetPage={this.setPage} />
      </div>
    );
  }
}
