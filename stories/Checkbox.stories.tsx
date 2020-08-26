import React from "react";
import { Meta, Story } from "@storybook/react";
import { useArgs } from "@storybook/addons";

import { Checkbox } from "../src";

interface Props {
  readonly checked: boolean;
  readonly disabled: boolean;
  readonly label: string;
}

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    label: { control: "text" },
  },
} as Meta;

export const normal: Story<Props> = ({ checked, label, ...args }) => {
  const [_args, updateArgs] = useArgs();

  return (
    <Checkbox
      id="uniqueId"
      checked={checked}
      onClick={() => updateArgs({ checked: !checked })}
      {...args}
    >
      {label}
    </Checkbox>
  );
};

normal.args = {
  checked: false,
  disabled: false,
  label: "Label",
};
