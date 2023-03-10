import React from 'react';
import { render } from '@testing-library/react';

import { IconButton } from '../src';

describe('IconButton', () => {
  it('should render Icon Button with a blend icon', () => {
    const { container } = render(
      <IconButton iconProps={{ iconName: 'blend' }} />
    );

    expect(container).toMatchSnapshot();
  });

  it('should render Icon Button with selected option', () => {
    const { container } = render(
      <IconButton iconProps={{ iconName: 'blend' }} selected />
    );

    expect(container).toMatchSnapshot();
  });

  it('should render IconButton with custom className', () => {
    const { container } = render(
      <IconButton
        iconProps={{ iconName: 'blend' }}
        className="custom-class-name"
      />
    );

    expect(container).toMatchSnapshot();
  });

  // TODO disabled
  // TODO onClick
});
