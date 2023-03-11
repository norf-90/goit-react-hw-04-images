import React, { Component } from 'react';

import {
  Header,
  Form,
  Input,
  SubmitButton,
  Container,
} from './Searchbar.styled';
import { ImSearch } from 'react-icons/im';

class Searchbar extends Component {
  state = {
    searchName: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { searchName } = this.state;
    if (searchName.trim() === '') return;
    this.props.onSubmit(searchName);
    this.setState({ searchName: '' });
  };

  handleChange = evt => {
    this.setState({ searchName: evt.target.value });
  };

  render() {
    return (
      <Header>
        <Form className="form" onSubmit={this.handleSubmit}>
          <Container>
            <SubmitButton type="submit" className="button">
              <ImSearch />
            </SubmitButton>

            <Input
              type="text"
              name="value"
              value={this.state.searchName}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
              required
            />
          </Container>
        </Form>
      </Header>
    );
  }
}

export default Searchbar;
