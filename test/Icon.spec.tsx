import React from 'react';
import { render } from '@testing-library/react';

import { Icon } from '../src';

describe('Icon', () => {
  it('should render component matching snapshot', () => {
    const { container } = render(<Icon />);

    expect(container).toMatchSnapshot();
  });
});
