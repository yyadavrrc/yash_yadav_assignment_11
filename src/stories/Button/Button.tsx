import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

interface ButtonProps {
  label: string;
  backgroundColor: string;
  fontColor: string;
  borderColor: string;
  Disable: boolean,
}

const StyledButton = styled.button<{ backgroundColor: string, fontColor: string, borderColor: string, Disable: boolean}>`
  /* Add your button styles here */
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  padding: 8px 16px;
  border: none;
  border-radius: 15px;
  cursor: ${(props) => (props.Disable ? 'not-allowed' : 'pointer')}; // Set cursor based on Disable prop
  border: 2px solid ${(props) => props.borderColor};
`;

const Button: React.FC<ButtonProps> = ({ label, backgroundColor, fontColor, borderColor, Disable }) => { // Added backgroundColor prop
  return (
    <StyledButton backgroundColor={backgroundColor} fontColor={fontColor} borderColor={borderColor} Disable={Disable}> {/* Passed backgroundColor prop */}
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
};

export default Button;
