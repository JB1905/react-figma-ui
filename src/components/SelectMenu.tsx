import React, { useEffect, HTMLProps, ReactElement } from 'react';
import { selectMenu } from 'figma-plugin-ds';

interface SelectMenuProps extends Readonly<HTMLProps<HTMLSelectElement>> {
  readonly options: any[];
  render(option: any): ReactElement;
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
