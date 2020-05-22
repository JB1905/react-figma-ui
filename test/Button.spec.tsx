import React from 'react';
import { render } from '@testing-library/react';

import { Button } from '../src';

describe('Button', () => {
  it('should render primary Button', () => {
    const { container } = render(<Button tint="primary">Hello World!</Button>);

    expect(container).toMatchSnapshot();
  });

  it('should render secondary Button with destructive style', () => {
    const { container } = render(
      <Button tint="secondary" destructive>
        Hello World!
      </Button>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render disabled tertirary Button', () => {
    const { container } = render(
      <Button tint="tertirary" disabled>
        Hello World!
      </Button>
    );

    expect(container).toMatchSnapshot();
  });
});
