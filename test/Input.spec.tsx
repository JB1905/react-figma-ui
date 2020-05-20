import React from 'react';
import { render } from '@testing-library/react';

import { Input } from '../src';

describe('Input', () => {
  it('should render component matching snapshot', () => {
    const { container } = render(<Input />);

    expect(container).toMatchSnapshot();
  });
});
