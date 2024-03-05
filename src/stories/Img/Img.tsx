import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Imageeee from './Imageeee.jpg';

interface ImgProps {
  Disable: boolean;
  width: number;
  height: number;
}

const ImgLabel = styled.img<{ Disable: boolean; width: number; height: number }>`
  cursor: ${(props) => (props.Disable ? 'not-allowed' : 'pointer')};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  filter: ${(props) => (props.Disable ? 'grayscale(100%)' : 'none')};
`;

const Img: React.FC<ImgProps> = ({ Disable, width, height }) => {
  return <ImgLabel src={Imageeee} alt="Your image alt text" Disable={Disable} width={width} height={height} />;
};

export default Img;
