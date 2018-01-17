import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import ResolutionForm from './ResolutionForm';

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
        <ul>{data.getResolutions.map(res => <li key={res._id}>{res.name || res._id}</li>)}</ul>

        <ResolutionForm />
      </div>
    );
  }
}

const GET_RESOLUTIONS_QUERY = gql`
  query GetResolutions {
    getResolutions {
      _id
      name
    }
  }
`;

export default graphql(GET_RESOLUTIONS_QUERY)(App);
