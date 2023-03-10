import React from 'react';
import { render } from '@testing-library/react';

import { Switch } from '../src';

describe('Switch', () => {
  it('should render Switch', () => {
    // TODO onChange
    const { container } = render(
      <Switch id="uniqueId" readOnly onChange={() => {}}>
        Label
      </Switch>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render checked Switch', () => {
    // TODO onChange
    const { container } = render(
      <Switch id="uniqueId" readOnly checked onChange={() => {}}>
        Label
      </Switch>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render disabled Switch', () => {
    // TODO onChange
    const { container } = render(
      <Switch id="uniqueId" readOnly disabled onChange={() => {}}>
        Label
      </Switch>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render Switch with custom className values', () => {
    const { container } = render(
      <Switch
        id="uniqueId"
        readOnly
        className="custom-class-name"
        containerProps={{ className: 'custom-class-name' }}
        labelProps={{ className: 'custom-class-name' }}
      >
        Label
      </Switch>
    );

    expect(container).toMatchSnapshot();
  });
});
