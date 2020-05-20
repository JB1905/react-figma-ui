import React from 'react';
import { render } from '@testing-library/react';

import { Radio } from '../src';

describe('Radio', () => {
  it('should render component matching snapshot', () => {
    const { container } = render(<Radio />);

    expect(container).toMatchSnapshot();
  });
});
