import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Label } from '../src';

interface Props {
  readonly label: string;
}

export default {
  title: 'Label',
  component: Label,
  args: {
    label: 'Label',
  },
} as Meta;

export const Normal: Story<Props> = ({ label }) => <Label>{label}</Label>;
