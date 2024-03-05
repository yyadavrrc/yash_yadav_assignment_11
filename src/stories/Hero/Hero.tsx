import React from 'react';
import styled from 'styled-components';

interface HeroProps {
  Disable: boolean;
  imgSrc: string;
}

const HeroLabel = styled.img<{ Disable: boolean }>`
  cursor: ${(props) => (props.Disable ? 'not-allowed' : 'pointer')};
  height: 400px;
  width: 700px;
  filter: ${(props) => (props.Disable ? 'grayscale(100%)' : 'none')};
`;

const Hero: React.FC<HeroProps> = ({ Disable, imgSrc }) => {
  return (
    <>
      <h1 style={{
        color: 'white',
        position: 'relative',
        top: '100px',
        left: '100px',
        margin: 'auto',
        fontFamily: 'Gill Sans, "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
        fontSize: '61px'
      }}>Assassin's creed</h1>
      <HeroLabel src={imgSrc} Disable={Disable} />
    </>
  );
};

export default Hero;
