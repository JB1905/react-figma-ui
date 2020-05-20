import React, { HTMLProps, useEffect } from 'react';
import { selectMenu } from 'figma-plugin-ds';

type Option = {
  readonly value: string;
};

interface SelectMenuProps extends Readonly<HTMLProps<HTMLSelectElement>> {
  readonly options: Option[];
  render(option: any): void;
}

interface SelectMenuItemProps extends Readonly<HTMLProps<HTMLOptionElement>> {}

export const SelectMenu: React.FC<SelectMenuProps> = ({
  options,
  render,
  className = '',
  ...props
}) => {
  useEffect(() => {
    selectMenu.init();

    return () => selectMenu.destroy();
  }, []);

  return (
    <select {...props} className={`select-menu ${className}`}>
      {options.map((option) => render(option))}
    </select>
  );
};

export const SelectMenuOption: React.FC<SelectMenuItemProps> = ({
  children,
  ...props
}) => {
  return <option {...props}>{children}</option>;
};
