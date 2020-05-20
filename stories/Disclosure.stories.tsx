import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Disclosure } from '../src';

export default {
  title: 'Disclosure',
  decorators: [withKnobs],
};

export const normal = () => <Disclosure />;
