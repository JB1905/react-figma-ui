import React from 'react';
import { render } from '@testing-library/react';

import { Input } from '../src';

describe('Input', () => {
  it('should render Input with placeholder', () => {
    const { container } = render(<Input placeholder="Placeholder" />);

    expect(container).toMatchSnapshot();
  });

  it('should render Input with initial value', () => {
    const { container } = render(<Input value="Initial value" />);

    expect(container).toMatchSnapshot();
  });

  it('should render Disabled input', () => {
    const { container } = render(<Input value="Initial value" disabled />);

    expect(container).toMatchSnapshot();
  });

  it('should render Input with icon', () => {
    const { container } = render(
      <Input value="Value" iconProps={{ iconName: 'angle' }} />
    );

    expect(container).toMatchSnapshot();
  });
});
