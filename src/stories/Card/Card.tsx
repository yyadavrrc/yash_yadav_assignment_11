import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import diet from './diet.png';

interface CardProps {
  Disable: boolean;
  width: number;
  height: number;
  background: string;
}

const CardLabel = styled.div<{ Disable: boolean; width: number; height: number; background: string }>`
  cursor: ${(props) => (props.Disable ? 'not-allowed' : 'pointer')};
  width: 200px;
  height: 400px;
  filter: ${(props) => (props.Disable ? 'grayscale(100%)' : 'none')};
  background-color: ${(props) => props.background};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: inherit;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  h1 {
    margin: 10px 20px;
    font-size: 1.5rem;
    color: #333;
  }

  caption {
    margin: 5px 20px 0;
    font-size: 0.9rem;
    color: #555;
  }

  p {
    margin: 0 20px;
    font-size: 1rem;
    color: #777;
  }
`;

const Card: React.FC<CardProps> = ({ Disable, width, height, background }) => {
  return (
    <CardLabel Disable={Disable} width={width} height={height} background={background}>
      <img src={diet} alt="" />
      <h1>Project 1</h1>
      <caption>GamesConcluded</caption>
      <p>A site explaining the history of <br /> one game series</p>
    </CardLabel>
  );
};

export default Card;
