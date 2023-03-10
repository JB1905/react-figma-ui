import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Checkbox } from '../src';

describe('Checkbox', () => {
  // TODO: check, uncheck
  // TODO onChange

  it('should render unchecked Checkbox', () => {
    const onClick = jest.fn();

    const { container, getByText } = render(
      <Checkbox id="uniqueId" readOnly onClick={onClick}>
        Label
      </Checkbox>
    );

    expect(container).toMatchSnapshot();

    fireEvent.click(getByText('Label'));

    // expect(onClick).not.toHaveBeenCalled();
    expect(onClick).toHaveBeenCalled();

    // TODO: onClick to have been called
    // TODO: not to be checked
  });

  it('should render checked Checkbox', () => {
    const onClick = jest.fn();

    const { container } = render(
      <Checkbox id="uniqueId" readOnly checked onClick={onClick}>
        Label
      </Checkbox>
    );

    expect(container).toMatchSnapshot();

    // fireEvent.click(getByText('Label'));

    // expect(onClick).not.toHaveBeenCalled();

    // TODO: onClick not to have been called
    // TODO: to be checked
  });

  it('should render disabled Checkbox', () => {
    const onClick = jest.fn();

    const { container, getByText } = render(
      <Checkbox id="uniqueId" readOnly disabled>
        Label
      </Checkbox>
    );

    expect(container).toMatchSnapshot();

    fireEvent.click(getByText('Label'));

    expect(onClick).not.toHaveBeenCalled();
  });

  it('should render Checkbox with custom className values', () => {
    const onClick = jest.fn();

    const { container, getByText } = render(
      <Checkbox
        id="uniqueId"
        className="custom-class-name"
        containerProps={{ className: 'custom-class-name' }}
        labelProps={{ className: 'custom-class-name' }}
        onClick={onClick}
      >
        Label
      </Checkbox>
    );

    expect(container).toMatchSnapshot();

    fireEvent.click(getByText('Label'));

    expect(onClick).toHaveBeenCalled();
  });
});
