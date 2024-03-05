import React from "react";
import Hero from "./Hero";
import Imgdisable from './Imgdisable.jpg';

export default {
  title: "Hero",
  component: Hero,
  argTypes: {
    Disable: { control: 'boolean' },
  },
}

const Template = (args) => <Hero {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  imgSrc: Imgdisable,
  Disable: false,
};

export const Disable = Template.bind({});
Disable.args = {
  imgSrc: Imgdisable,
  Disable: true,
};
