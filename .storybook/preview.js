import React from 'react';
import { addDecorator } from '@storybook/react';

export const parameters = {
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
  docs: { page: null },
};

addDecorator((Story) => (
  <div
    style={{
      maxWidth: 300,
      height: 'calc(100vh - 2rem)',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Story />
  </div>
));
