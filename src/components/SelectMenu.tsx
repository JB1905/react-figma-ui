import React, { useEffect } from 'react';
import { selectMenu } from 'figma-plugin-ds';

type Option = {
  value: string;
};

interface Props {
  options: Option[];
}

export const SelectMenu: React.FC<Props> = () => {
  useEffect(() => {
    selectMenu.init();

    return () => selectMenu.destroy();
  }, []);

  return (
    <select id="uniqueId" className="select-menu">
      <option value="1">Item 1</option>
      <option value="2">Item 2</option>
      <option value="3">Item 3</option>
    </select>
  );
};
