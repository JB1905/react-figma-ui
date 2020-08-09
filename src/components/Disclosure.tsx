import React, {
  useEffect,
  HTMLProps,
  ReactElement,
  DetailedHTMLProps,
  LiHTMLAttributes,
} from 'react';
import { disclosure } from 'figma-plugin-ds';
import clsx from 'clsx';

interface DisclosureProps extends Readonly<HTMLProps<HTMLUListElement>> {
  readonly tips: any[];
  render(...tipData: [any, number, any[]]): ReactElement;
}

interface DisclosureTipProps
  extends Readonly<
    DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
  > {
  readonly heading: ReactElement;
  readonly content: ReactElement;
  readonly section?: boolean;
  readonly expanded?: boolean;
  readonly labelProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly contentProps?: Readonly<HTMLProps<HTMLDivElement>>;
}

export const Disclosure: React.FC<DisclosureProps> = ({
  tips,
  render,
  className = '',
  ...props
}) => {
  useEffect(() => {
    disclosure.init();

    return () => disclosure.destroy();
  }, []);

  return (
    <ul {...props} className={clsx('disclosure', className)}>
      {tips.map((...tipData) => render(...tipData))}
    </ul>
  );
};

export const DisclosureTip: React.FC<DisclosureTipProps> = ({
  section,
  expanded,
  heading,
  content,
  className = '',
  labelProps = {},
  contentProps = {},
  ...props
}) => {
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
};
