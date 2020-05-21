import React from 'react';
import { addDecorator } from '@storybook/react';

addDecorator((storyFn) => (
  <div
    style={{
      maxWidth: 300,
      height: '100vh',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {storyFn()}
  </div>
));
