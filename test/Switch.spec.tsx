import React from 'react';
import { render } from '@testing-library/react';

import { Switch } from '../src';

describe('Switch', () => {
  it('should render Switch', () => {
    const { container } = render(<Switch id="uniqueId">Label</Switch>);

    expect(container).toMatchSnapshot();
  });

  it('should render checked Switch', () => {
    const { container } = render(
      <Switch id="uniqueId" checked>
        Label
      </Switch>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render disabled Switch', () => {
    const { container } = render(
      <Switch id="uniqueId" disabled>
        Label
      </Switch>
    );

    expect(container).toMatchSnapshot();
  });
});
