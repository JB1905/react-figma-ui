import React from 'react';
import { withKnobs, text, boolean, color } from '@storybook/addon-knobs';

import { Button } from '../src';

export default {
  title: 'Button',
  decorators: [withKnobs],
};

export const normal = () => <Button title="Hello" />;
