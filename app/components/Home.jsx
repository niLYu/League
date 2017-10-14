import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 80vh;
  align-items: center;
  justify-content: center;
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

  @media (max-width: 700px) {
    width: 20em;
    height: 20em;
  }
`;

const Label = styled.label`
  width: 90%;
  padding-left: 10%
`;

const Input = styled.input`
  text-align: center;
  border-style: none;
  font-size: 2em;
  &:focus ${Input} {
    outline: none;
  }

  @media (max-width: 700px) {
    font-size: 1em;
  }
`
const ButtonWrap = styled.button`
  background-color: teal;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  font-size: 13px;
  text-align: center;
  &:hover ${ButtonWrap} {
    background-color: white;
  }
`

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
          <Label>
            <Input
              type='text'
              placeholder="Summoner's name"
              value={this.state.playerName}
              onChange={this.handleChange}
            />
          </Label>
          <Link to={{
            pathname: '/summoner',
            search: `username=${this.state.playerName}`
          }}>
            <ButtonWrap>GO</ButtonWrap>
          </Link>
        </Form>
      </Container>
    )
  }
}

export default Home;
