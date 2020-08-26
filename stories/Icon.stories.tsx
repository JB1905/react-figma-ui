import React from "react";
import { Meta, Story } from "@storybook/react";

import { Icon } from "../src";

import { IconName, ColorName } from "../src/types";

interface Props {
  readonly iconName: IconName;
  readonly iconColor: ColorName;
  readonly spin: boolean;
  readonly value: string;
}

export default {
  title: "Icon",
  component: Icon,
  argTypes: {
    iconName: { control: "text" }, // TODO
    iconColor: { control: "text" }, // TODO
    spin: { control: "boolean" },
    value: { control: "text" },
  },
} as Meta;

export const normal: Story<Props> = ({ value, ...args }) => (
  <Icon {...args}>{value}</Icon>
);

normal.args = {
  iconName: "blend", // TODO
  iconColor: "blue", // TODO
  spin: false,
  value: "",
};
