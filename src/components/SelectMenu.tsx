import React, { HTMLProps, useEffect } from 'react';
import { selectMenu } from 'figma-plugin-ds';

type Option = {
  value: string;
};

interface Props {
  options: Option[];
  selectProps?: HTMLProps<HTMLSelectElement>;
  optionProps?: HTMLProps<HTMLOptionElement>;
}

export const SelectMenu: React.FC<Props> = ({
  options,
  selectProps = {},
  optionProps = {},
}) => {
  useEffect(() => {
    selectMenu.init();

    return () => selectMenu.destroy();
  }, []);

  return (
    <select id="uniqueId" className="select-menu">
      {options.map((option) => (
        <option value="1" key={null}>
          Item 1
        </option>
      ))}
    </select>
  );
};
