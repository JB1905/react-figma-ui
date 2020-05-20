import React, { HTMLProps, useEffect } from 'react';
import { selectMenu } from 'figma-plugin-ds';

type Option = {
  value: string;
};

interface SelectMenuProps extends HTMLProps<HTMLSelectElement> {
  options: Option[];
  render(option: any): void;
}

interface SelectMenuItemProps extends HTMLProps<HTMLOptionElement> {}

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
