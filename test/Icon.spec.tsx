import React from 'react';
import { render } from '@testing-library/react';

import { Icon } from '../src';

describe('Icon', () => {
  it('should render blend Icon', () => {
    const { container } = render(<Icon iconName="theme" readOnly />);

    expect(container).toMatchSnapshot();
  });

  it('should render Icon with blue colorName to change color', () => {
    const { container } = render(
      <Icon iconName="theme" colorName="blue" readOnly />
    );

    expect(container).toMatchSnapshot();
  });

  it('should render spinner Icon with spinning animation', () => {
    const { container } = render(<Icon iconName="spinner" readOnly spin />);

    expect(container).toMatchSnapshot();
  });

  it('should render Text Icon', () => {
    const { container } = render(<Icon>W</Icon>);

    expect(container).toMatchSnapshot();
  });

  it('should render Icon with custom className', () => {
    const { container } = render(
      <Icon iconName="warning" className="custom-class-name" />
    );

    expect(container).toMatchSnapshot();
  });
});
