import { FC, ComponentProps } from 'react';
import classNames from 'classnames';
import './Button.scss';

interface ButtonProps {
  label: string;
  buttonType?: string;
  onClick: Function;
  props?: ComponentProps<'button'>;
}

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  buttonType = 'primary',
  props,
}) => {
  return (
    <button
      className={classNames('button', {
        'primary-button': buttonType === 'primary',
      })}
      onClick={() => onClick()}
      {...props}>
      {label}
    </button>
  );
};

export default Button;
