import React, { useEffect, HTMLProps, ReactElement } from 'react';
import { selectMenu } from 'figma-plugin-ds';
import sTrimmer from 's-trimmer';

interface SelectMenuProps<T> extends Readonly<HTMLProps<HTMLSelectElement>> {
  readonly options: T[];
  render(...optionData: [T, number, T[]]): ReactElement;
}

interface SelectMenuItemProps extends Readonly<HTMLProps<HTMLOptionElement>> {}

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
    <select {...props} className={sTrimmer(`select-menu ${className}`)}>
      {options.map(render)}
    </select>
  );
}

export const SelectMenuOption = ({
  children,
  ...props
}: SelectMenuItemProps) => <option {...props}>{children}</option>;
