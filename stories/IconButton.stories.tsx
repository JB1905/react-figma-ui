import React from 'react';
import { Meta, Story } from '@storybook/react';

import { IconButton } from '../src';

import { IconName } from '../src/types';

interface Props {
  readonly iconName: IconName;
  readonly selected: boolean;
}

export default {
  title: 'IconButton',
  component: IconButton,
  argTypes: {
    iconName: { control: 'text' }, // TODO
    selected: { control: 'boolean' },
  },
} as Meta;

export const normal: Story<Props> = ({ iconName, ...args }) => (
  <IconButton iconProps={{ iconName }} {...args} />
);

normal.args = {
  iconName: 'theme',
  selected: false,
};
