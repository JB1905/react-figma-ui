import React from 'react';
import { addDecorator } from '@storybook/react';

export const parameters = {
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
  backgrounds: {
    disable: true,
  },
  docs: { page: null },
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
    {/* TODO remove temporary workaround - https://github.com/storybookjs/storybook/issues/11657 */}
    {Story()}
    {/* <Story /> */}
  </div>
));
