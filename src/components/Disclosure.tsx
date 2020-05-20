import React, { HTMLProps, useEffect } from 'react';
import { disclosure } from 'figma-plugin-ds';

interface DisclosureProps extends Readonly<HTMLProps<HTMLUListElement>> {
  readonly items: any[];
  render(item: any): void;
}

interface DisclosureItemProps {
  readonly section?: boolean;
  readonly expanded?: boolean;
  readonly itemProps?: Readonly<
    React.DetailedHTMLProps<
      React.LiHTMLAttributes<HTMLLIElement>,
      HTMLLIElement
    >
  >;
  readonly labelProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly contentProps?: Readonly<HTMLProps<HTMLDivElement>>;
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
        {/* {heading} */}
      </div>

      <div
        {...contentRest}
        className={`disclosure__content ${contentClassName}`}
      >
        {/* {content} */}
      </div>
    </li>
  );
};
