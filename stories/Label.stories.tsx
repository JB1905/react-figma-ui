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

<<<<<<< Updated upstream
<<<<<<< HEAD
export const normal = ({ label }: Props) => <Label>{label}</Label>;

normal.args = {
=======
export const Normal = ({ label }: Props) => <Label>{label}</Label>;

Normal.args = {
>>>>>>> feat: replace knobs with controls
  label: 'Label',
=======
export const normal: Story<Props> = ({ label }) => <Label>{label}</Label>;

normal.args = {
  label: "Label",
>>>>>>> Stashed changes
};
