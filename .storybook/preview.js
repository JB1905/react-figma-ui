import React from 'react';
import { addDecorator } from '@storybook/react';

export const parameters = {
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
  docs: { page: null },
  layout: 'fullscreen',
};

addDecorator((Story) => (
  <div
    style={{
      maxWidth: 300,
      minHeight: '100vh',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
    }}
  >
    <Story />
  </div>
));
