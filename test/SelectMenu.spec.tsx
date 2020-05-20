import React from 'react';
import { render } from '@testing-library/react';

import { SelectMenu, SelectMenuOption } from '../src';

describe('SelectMenu', () => {
  it('should render component matching snapshot', () => {
    const { container } = render(<SelectMenu />);

    expect(container).toMatchSnapshot();
  });
});
