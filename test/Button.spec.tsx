import React from 'react';
import { render } from '@testing-library/react';

import { Button } from '../src';

describe('Button', () => {
  it('should render component matching snapshot', () => {
    const { container } = render(<Button title="Hello World!" />);

    expect(container).toMatchSnapshot();
  });
});
