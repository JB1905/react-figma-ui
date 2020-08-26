import React from "react";
import { Meta, Story } from "@storybook/react";

import { Label } from "../src";

interface Props {
  readonly label: string;
}

export default {
  title: "Label",
  component: Label,
  argTypes: {
    label: { control: "text" },
  },
} as Meta;

export const normal: Story<Props> = ({ label }) => <Label>{label}</Label>;

normal.args = {
  label: "Label",
};
