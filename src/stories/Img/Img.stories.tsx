import Img from "./Img";

export default {
  title: "Img",
  component: Img,
  argTypes: {
    width: { control: { type: 'range', min: 0, max: 500, step: 1 } }, // width as a slider
    height: { control: { type: 'range', min: 0, max: 500, step: 1 } }, // height as a slider
    Disable: { control: 'boolean' },
  },
}

const Template = (args) => <Img {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  width: 100,
  height: 100,
  Disable: false,
};

export const Disable = Template.bind({});
Disable.args = {
  width: 100,
  height: 100,
  Disable: true,
};
