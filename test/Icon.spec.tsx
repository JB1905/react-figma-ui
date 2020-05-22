import React from 'react';
import { render } from '@testing-library/react';

import { Icon } from '../src';

describe('Icon', () => {
  it('should render blend Icon', () => {
    const { container } = render(<Icon iconName="theme" />);

    expect(container).toMatchSnapshot();
  });

  it('should render Icon with blue colorName to change color', () => {
    const { container } = render(<Icon iconName="theme" colorName="blue" />);

    expect(container).toMatchSnapshot();
  });

  it('should render spinner Icon with spinning animation', () => {
    const { container } = render(<Icon iconName="spinner" spin />);

    expect(container).toMatchSnapshot();
  });

  it('should render Text Icon', () => {
    const { container } = render(<Icon>W</Icon>);

    expect(container).toMatchSnapshot();
  });
});
