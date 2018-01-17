import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await this.props.mutate({
        variables: { name: this.state.value },
        refetchQueries: ['GetResolutions'],
      });

      this.setState({ value: '' });
    } catch (error) {
      throw error;
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const CREATE_RESOLUTION_MUTATION = gql`
  mutation createResolution($name: String!) {
    createResolution(name: $name) {
      _id
      name
    }
  }
`;

export default graphql(CREATE_RESOLUTION_MUTATION)(Form);
