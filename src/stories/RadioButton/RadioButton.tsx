import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

interface RadioButtonProps {
  label: string;
  disable: boolean;
  color: string; // Added color prop
}

const StyledRadioButton = styled.input<{ disable: boolean }>`
  cursor: ${(props) => (props.disable ? 'not-allowed' : 'pointer')};
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const RadioButton: React.FC<RadioButtonProps> = ({ label, disable, color }) => {
  return (
    <>
      <label>
        <StyledRadioButton
          disabled={disable}
          disable={disable}
          type="radio"
          name="radioGroup" // Changed the name attribute
          value={label}
        />
        <span style={{ color: disable ? '#777' : color }}>{label}</span>
      </label>
    </>
  );
};

RadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  disable: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

export default RadioButton;
