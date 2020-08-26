import React from "react";
import { Meta, Story } from "@storybook/react";
import { useArgs } from "@storybook/addons";

import { Radio } from "../src";

interface Props {
  readonly checked: boolean;
  readonly disabled: boolean;
  readonly value: string;
}

export default {
  title: "Radio",
  component: Radio,
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    value: { control: "text" },
  },
  args: {
    checked: false,
    disabled: false,
    value: "Radio Button",
  },
} as Meta;

// TODO add more radio buttons

export const normal: Story<Props> = ({ checked, value, ...args }) => {
  const [_args, updateArgs] = useArgs();

  return (
    <Radio
      id="radioButton" // TODO
      checked={checked}
      onClick={() => updateArgs({ checked: true })}
      {...args}
    >
      {value}
    </Radio>
  );
};

normal.args = {
  checked: false,
  disabled: false,
  value: "Radio Button",
};
