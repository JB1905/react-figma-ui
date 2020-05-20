import React from 'react';
import { render } from '@testing-library/react';

import { Button, Tint } from '../src';

describe('Button', () => {
  it('should render component matching snapshot', () => {
    const { container } = render(
      <Button tint={Tint.Secondary}>Hello World!</Button>
    );

    expect(container).toMatchSnapshot();
  });
});
