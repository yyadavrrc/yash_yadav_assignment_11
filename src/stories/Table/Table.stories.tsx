import React from "react";
import Table from "./Table";

export default {
  title: "Table",
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color' },
    Disable: { control:'boolean'},
  },
}

const Template = (args) => <Table {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  Table: "Simple Table",
  backgroundColor: "#ecffec",
  price:20,
  Disable: false,
};

export const Disable = Template.bind({});
Disable.args = {
  Table: "Warning Table",
  backgroundColor: "#ffdfdf",
  price:20,
  Disable: true,
};