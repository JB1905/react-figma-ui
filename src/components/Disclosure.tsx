import React, {
  useEffect,
  HTMLProps,
  ReactElement,
  DetailedHTMLProps,
  LiHTMLAttributes,
  forwardRef,
} from 'react';
import { disclosure } from 'figma-plugin-ds';
import clsx from 'clsx';

interface DisclosureProps<T>
  extends Omit<Readonly<HTMLProps<HTMLUListElement>>, 'ref'> {
  readonly items: T[];
  render(...itemData: [T, number, T[]]): ReactElement;
}

interface DisclosureItemProps
  extends Readonly<
    Omit<
      DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>,
      'ref'
    >
  > {
  readonly heading: string;
  readonly content: string;
  readonly section?: boolean;
  readonly expanded?: boolean;
  readonly labelProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly contentProps?: Readonly<HTMLProps<HTMLDivElement>>;
}

// TODO: forward ref
export function Disclosure<T extends object>({
  items,
  render,
  className = '',
  ...props
}: DisclosureProps<T>) {
  useEffect(() => {
    disclosure.init();

    return () => disclosure.destroy();
  }, []);

  return (
    <ul {...props} className={clsx('disclosure', className)}>
      {items.map(render)}
    </ul>
  );
}

export const DisclosureItem = forwardRef<HTMLLIElement, DisclosureItemProps>(
  (
    {
      section,
      expanded,
      heading,
      content,
      className = '',
      labelProps = {},
      contentProps = {},
      ...props
    },
    ref
  ) => {
    const { className: labelClassName = '', ...labelRest } = labelProps;
    const { className: contentClassName = '', ...contentRest } = contentProps;

    return (
      <li
        {...props}
        className={clsx(
          'disclosure__item',
          className,
          expanded && 'disclosure--expanded'
        )}
        ref={ref}
      >
        <div
          {...labelRest}
          className={clsx(
            'disclosure__label',
            labelClassName,
            section && 'disclosure--section'
          )}
        >
          {heading}
        </div>

        <div
          {...contentRest}
          className={clsx('disclosure__content', contentClassName)}
        >
          {content}
        </div>
      </li>
    );
  }
);
