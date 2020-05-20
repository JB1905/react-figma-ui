import React, {
  useEffect,
  HTMLProps,
  ReactElement,
  DetailedHTMLProps,
  LiHTMLAttributes,
} from 'react';
import { disclosure } from 'figma-plugin-ds';

interface DisclosureProps extends Readonly<HTMLProps<HTMLUListElement>> {
  readonly items: any[];
  render(item: any): ReactElement;
}

interface DisclosureItemProps {
  renderHeading(): ReactElement;
  renderContent(): ReactElement;
  readonly section?: boolean;
  readonly expanded?: boolean;
  readonly itemProps?: Readonly<
    DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
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
  renderHeading,
  renderContent,
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
        {renderHeading()}
      </div>

      <div
        {...contentRest}
        className={`disclosure__content ${contentClassName}`}
      >
        {renderContent()}
      </div>
    </li>
  );
};
