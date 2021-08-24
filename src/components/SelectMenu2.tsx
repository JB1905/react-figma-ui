import React, { HTMLProps, ReactElement } from 'react';

interface SelectMenuProps<T> extends Readonly<HTMLProps<HTMLSelectElement>> {
  readonly options: T[];
  render(...optionData: [T, number, T[]]): ReactElement;
}

interface SelectMenuItemProps extends Readonly<HTMLProps<HTMLOptionElement>> {}

// TODO
export function SelectMenu<T extends object>({
  options,
  render,
  className = '',
  ...props
}: SelectMenuProps<T>) {
  return null;
}

export const SelectMenuOption = ({
  children,
  ...props
}: SelectMenuItemProps) => <option {...props}>{children}</option>;
