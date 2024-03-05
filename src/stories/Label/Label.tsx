import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

interface LabelProps {
  label: string;
  backgroundColor: string;
  fontColor: string;
  borderColor: string;
  Disable: boolean;
}

const StyledLabel = styled.div<{ backgroundColor: string, fontColor: string, borderColor: string, Disable: boolean}>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  padding: 15px;
  font-family: 'Arial', sans-serif;
  width: fit-content;
  border-radius: 2px;
  cursor: ${(props) => (props.Disable ? 'not-allowed' : 'pointer')};
  border: 2px solid ${(props) => props.borderColor};
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Label: React.FC<LabelProps> = ({ label, backgroundColor, fontColor, borderColor, Disable }) => {
  return (
    <StyledLabel Disable={Disable} backgroundColor={backgroundColor} fontColor={fontColor} borderColor={borderColor}>
      {label}
    </StyledLabel>
  );
};

Label.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
  Disable: PropTypes.bool.isRequired,
  borderColor: PropTypes.string.isRequired,
};

export default Label;
