import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {}
interface State {
  cnt: number;
}

export default class Error extends React.Component<Props, State> {
  state: State = { cnt: 404 };

  onClick = () => {
    this.setState({ cnt: this.state.cnt + 1 });
  };

  render() {
    return (
      <Jumbotron style={{ textAlign: 'center' }}>
        <p>{this.props.location.pathname}</p>
        <h1 onClick={this.onClick} style={{ userSelect: 'none', cursor: 'pointer' }}>
          {this.state.cnt}
        </h1>
        <p>Страница не найдена</p>
      </Jumbotron>
    );
  }
}
