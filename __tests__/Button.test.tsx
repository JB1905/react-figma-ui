import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Button } from '../src';

describe('Button', () => {
  it('should render primary Button', () => {
    const onClick = jest.fn();

    // TODO: refactor
    const { container, getByText } = render(
      <Button tint="primary" onClick={onClick}>
        Label
      </Button>
    );

    expect(container).toMatchSnapshot();

    fireEvent.click(getByText('Label'));

    expect(onClick).toHaveBeenCalled();
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
    const onClick = jest.fn();

    // TODO: refactor
    const { container, getByText } = render(
      <Button tint="tertiary" disabled onClick={onClick}>
        Label
      </Button>
    );

    expect(container).toMatchSnapshot();

    fireEvent.click(getByText('Label'));

    expect(onClick).not.toHaveBeenCalled();
  });

  it('should render Button with custom className', () => {
    const { container } = render(
      <Button className="custom-class-name">Label</Button>
    );

    expect(container).toMatchSnapshot();
  });
});
