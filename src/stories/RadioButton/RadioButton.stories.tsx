import React from "react";
import RadioButton from "./RadioButton";

export default {
  title: "RadioButton",
  component: RadioButton,
}

const Template = (args) => (
  <>
    <RadioButton {...args} label="RadioButton 1" />
    <RadioButton {...args} label="RadioButton 2" />
  </>
);

export const Enabled = Template.bind({});
Enabled.args = {
  disable: false,
  label: "Option",
  color: "#09da",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disable: true,
  label: "Option",
  color: "#ff0000",
};

