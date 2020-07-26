import React from 'react';
import { render } from '@testing-library/react';

import { Input } from '.';

describe('Input', () => {
  it('should render Input with placeholder', () => {
    const { container } = render(<Input placeholder="Placeholder" readOnly />);

    expect(container).toMatchSnapshot();
  });

  it('should render Input with initial value', () => {
    const { container } = render(<Input value="Initial value" readOnly />);

    expect(container).toMatchSnapshot();
  });

  it('should render Disabled input', () => {
    const { container } = render(
      <Input value="Initial value" readOnly disabled />
    );

    expect(container).toMatchSnapshot();
  });

  it('should render Input with icon', () => {
    const { container } = render(
      <Input value="Value" iconProps={{ iconName: 'angle' }} readOnly />
    );

    expect(container).toMatchSnapshot();
  });

  it('should render Input with custom className values', () => {
    const { container } = render(
      <Input
        value="Value"
        type="search"
        className="custom-class-name"
        containerProps={{ className: 'custom-class-name' }}
        readOnly
      />
    );

    expect(container).toMatchSnapshot();
  });
});
