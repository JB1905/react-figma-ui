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
  args: {
    iconName: 'theme',
    selected: false,
  },
} as Meta;

export const normal: Story<Props> = ({ iconName, ...args }) => (
  <IconButton {...args} iconProps={{ iconName }} />
);
