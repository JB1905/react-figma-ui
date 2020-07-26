import React, { useEffect, HTMLProps, ReactElement } from 'react';
import { selectMenu } from 'figma-plugin-ds';
import classNames from 'classnames';

interface SelectMenuProps extends Readonly<HTMLProps<HTMLSelectElement>> {
  readonly options: any[];
  render(...optionData: [any, number, any[]]): ReactElement;
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
    <select {...props} className={classNames('select-menu', className)}>
      {options.map((...optionData) => render(...optionData))}
    </select>
  );
};

export const SelectMenuOption: React.FC<SelectMenuItemProps> = ({
  children,
  ...props
}) => <option {...props}>{children}</option>;
