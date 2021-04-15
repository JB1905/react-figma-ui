import React, { useEffect, useState, HTMLProps, ReactElement } from 'react';
import { selectMenu } from 'figma-plugin-ds';
import clsx from 'clsx';

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

  const [selectedOption, setSelectedOption] = useState(null);

  function onSelect(event:any){
    console.log('in onSelect');
    setSelectedOption(event.target.value);
  }

  console.log('dwootton in select menu react changed')
  return (
    <select onSelect={onSelect} onChange={onSelect} {...props} className={clsx('select-menu', className)}>
      {options.map(render)}
    </select>
  );
}

export const SelectMenuOption = ({
  children,
  ...props
}: //@ts-ignore
SelectMenuItemProps) => (
  <option onClick={() => console.log('in click option', props)} {...props}>
    {children}
  </option>
);
