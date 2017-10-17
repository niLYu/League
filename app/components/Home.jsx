import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex: 0.33;
  color: black;
  border-radius: 10%;
  border-style: outset;
  border-width: 1em;
  border-color: teal;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex: 0.65
  }
  @media (max-width: 400px) {
    flex: 0.85
  }
`;

const Label = styled.label`
  flex: 1;
`;

const Input = styled.input`
  font-size: 1em;
  border-style: none;
  margin-left 10px;
  width: 100%;
  &:focus ${Input} {
    outline: none;
  }
`;
const ButtonWrap = styled.div`
  background-color: teal;
  border-radius: 50%;
  text-align: center;
`;

const StyledButton = styled.button`
  background-color: teal;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  font-size: 13px;
  text-align: center;
  &:hover ${StyledButton} {
    background-color: white;
  }
`;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      playerName: '',
    };
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
              type="text"
              placeholder="Summoner's name"
              value={this.state.playerName}
              onChange={this.handleChange}
            />
          </Label>
          <ButtonWrap>
            <Link to={{
            pathname: '/summoner',
            search: `username=${this.state.playerName}`,
          }}
            >
              <StyledButton>GO</StyledButton>
            </Link>
          </ButtonWrap>
        </Form>
      </Container>
    );
  }
}

export default Home;
