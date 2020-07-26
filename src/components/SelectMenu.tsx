import React, { useEffect, HTMLProps, ReactElement } from 'react';
import { selectMenu } from 'figma-plugin-ds';
import sTrimmer from 's-trimmer';

interface SelectMenuProps extends Readonly<HTMLProps<HTMLSelectElement>> {
  readonly options: any[];
  render(...optionData: [any, number, any[]]): ReactElement;
}

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
    <select {...props} className={sTrimmer(`select-menu ${className}`)}>
      {options.map((...optionData) => render(...optionData))}
    </select>
  );
};

export const SelectMenuOption: React.FC<Readonly<
  HTMLProps<HTMLOptionElement>
>> = ({ children, ...props }) => <option {...props}>{children}</option>;
