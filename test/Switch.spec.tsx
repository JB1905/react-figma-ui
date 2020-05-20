import React from 'react';
import { render } from '@testing-library/react';

import { Switch } from '../src';

describe('Switch', () => {
  it('should render component matching snapshot', () => {
    const { container } = render(<Switch />);

    expect(container).toMatchSnapshot();
  });
});
