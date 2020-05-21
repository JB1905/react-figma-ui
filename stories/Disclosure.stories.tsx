import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Disclosure, DisclosureItem } from '../src';

export default {
  title: 'Disclosure',
  decorators: [withKnobs],
};

export const normal = () => (
  <Disclosure
    items={[1, 2, 3, 4]}
    render={(item) => (
      <DisclosureItem
        renderHeading={() => <p>Hello</p>}
        renderContent={() => <p>Hello</p>}
        section={boolean('Section', false)}
        expanded={boolean('Expanded', false)}
      />
    )}
  />
);
