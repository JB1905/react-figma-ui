import React, { HTMLProps, useEffect } from 'react';
import { disclosure } from 'figma-plugin-ds';

interface DisclosureProps extends HTMLProps<HTMLUListElement> {
  items: any[];
  render(item: any): void;
}

interface DisclosureItemProps {
  section?: boolean;
  expanded?: boolean;
  itemProps?: React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  >;
  labelProps?: HTMLProps<HTMLDivElement>;
  contentProps?: HTMLProps<HTMLDivElement>;
}

export const Disclosure: React.FC<DisclosureProps> = ({
  items,
  render,
  className = '',
  ...props
}) => {
  useEffect(() => {
    disclosure.init();

    return () => disclosure.destroy();
  }, []);

  return (
    <ul {...props} className={`disclosure ${className}`}>
      {items.map((item) => render(item))}
    </ul>
  );
};

export const DisclosureItem: React.FC<DisclosureItemProps> = ({
  section,
  expanded,
  itemProps = {},
  labelProps = {},
  contentProps = {},
}) => {
  const { className: itemClassName = '', ...itemRest } = itemProps;
  const { className: labelClassName = '', ...labelRest } = labelProps;
  const { className: contentClassName = '', ...contentRest } = contentProps;

  return (
    <li
      {...itemRest}
      className={`disclosure__item ${
        expanded ? 'disclosure--expanded' : ''
      } ${itemClassName}`}
    >
      <div
        {...labelRest}
        className={`disclosure__label ${
          section ? 'disclosure--section' : ''
        } ${labelClassName}`}
      >
        Disclosure heading
      </div>

      <div
        {...contentRest}
        className={`disclosure__content ${contentClassName}`}
      >
        Panel content here
      </div>
    </li>
  );
};
