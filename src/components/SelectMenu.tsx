import React, { useEffect, HTMLProps, ReactElement } from 'react';
import { selectMenu } from 'figma-plugin-ds';
import clsx from 'clsx';

interface SelectMenuProps<T>
  extends Omit<Readonly<HTMLProps<HTMLSelectElement>>, 'ref'> {
  readonly options: T[];
  render(...optionData: [T, number, T[]]): ReactElement;
}

interface SelectMenuItemProps
  extends Omit<Readonly<HTMLProps<HTMLOptionElement>>, 'ref'> {}

// TODO: forward ref
export function SelectMenu<T extends object>({
  options,
  render,
  className = '',
  ...props
}: SelectMenuProps<T>) {
  useEffect(() => {
    selectMenu.init();

    return () => selectMenu.destroy();
  }, []);

  return (
    <select {...props} className={clsx('select-menu', className)}>
      {options.map(render)}
    </select>
  );
}

// TODO: forward ref
export const SelectMenuOption = ({
  children,
  ...props
}: SelectMenuItemProps) => <option {...props}>{children}</option>;
