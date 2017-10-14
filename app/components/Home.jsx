import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100%;
  width: 100%;
  position: absolute;
`;

const Form = styled.form`
  display: flex;
  text-align: center;
  color: black;
  border-radius: 50%;
  border-style: outset;
  border-width: 1em;
  border-color: teal;
  width: 30em;
  height: 30em;
  align-items: center;
  justify-content: center;
`;

class Home extends Component {
  constructor() {
    super()
    this.state = {
      playerName: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ playerName: e.target.value });
  }

  render() {
    return (
      <Container>
        <Form>
          <label>
            Player Name:
            <input
              type='text'
              value={this.state.playerName}
              onChange={this.handleChange}
            />
          </label>
          <Link to={{
            pathname: '/summoner',
            search: `username=${this.state.playerName}`
          }}>
            <input type="submit" value="Submit" />
          </Link>
        </Form>
      </Container>
    )
  }
}

export default Home;
