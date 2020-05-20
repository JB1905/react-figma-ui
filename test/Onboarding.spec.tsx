import React from 'react';
import { render } from '@testing-library/react';

import { Onboarding } from '../src';

describe('Onboarding', () => {
  it('should render component matching snapshot', () => {
    const { container } = render(<Onboarding />);

    expect(container).toMatchSnapshot();
  });
});
