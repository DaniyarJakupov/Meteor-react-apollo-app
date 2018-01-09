import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class App extends Component {
  state = {};

  render() {
    const { data } = this.props;

    if (data.loading) {
      return (
        <div>
          <h2>Loading</h2>
        </div>
      );
    }
    return (
      <div>
        <h2>{data.getUser.username}</h2>

        <ul>{data.getResolutions.map(res => <li key={res._id}>{res.name}</li>)}</ul>
      </div>
    );
  }
}

const GET_USER_QUERY = gql`
  {
    getUser {
      username
      email
    }
    getResolutions {
      _id
      name
    }
  }
`;

export default graphql(GET_USER_QUERY)(App);
