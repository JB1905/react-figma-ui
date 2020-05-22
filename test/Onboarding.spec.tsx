import React from 'react';
import { render } from '@testing-library/react';

import { Onboarding } from '../src';

describe('Onboarding', () => {
  it('should render Onboarding', () => {
    const { container } = render(
      <Onboarding iconProps={{ iconName: 'styles' }}>
        Onboarding tip goes here.
      </Onboarding>
    );

    expect(container).toMatchSnapshot();
  });
});
