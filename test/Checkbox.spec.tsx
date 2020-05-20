import React from 'react';
import { render } from '@testing-library/react';

import { Checkbox } from '../src';

describe('Checkbox', () => {
  it('should render component matching snapshot', () => {
    const { container } = render(<Checkbox />);

    expect(container).toMatchSnapshot();
  });
});
