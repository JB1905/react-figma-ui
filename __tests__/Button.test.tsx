import React from 'react';
import { render } from '@testing-library/react';

import { Button } from '../src';

describe('Button', () => {
  it('should render primary Button', () => {
    const { container } = render(<Button tint="primary">Label</Button>);

    expect(container).toMatchSnapshot();
  });

  it('should render secondary Button with destructive style', () => {
    const { container } = render(
      <Button tint="secondary" destructive>
        Label
      </Button>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render disabled tertiary Button', () => {
    const { container } = render(
      <Button tint="tertiary" disabled>
        Label
      </Button>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render Button with custom className', () => {
    const { container } = render(
      <Button className="custom-class-name">Label</Button>
    );

    expect(container).toMatchSnapshot();
  });
});
