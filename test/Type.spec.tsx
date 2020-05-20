import React from 'react';
import { render } from '@testing-library/react';

import { Type } from '../src';

describe('Type', () => {
  it('should render component matching snapshot', () => {
    const { container } = render(<Type>Lorem ipsum dolor</Type>);

    expect(container).toMatchSnapshot();
  });
});
