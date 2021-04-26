import { FC } from 'react';
import classNames from 'classnames';
import './Button.scss';

interface PrimaryButtonProps {
  label: string;
  buttonType?: string;
  onClick: Function;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  label,
  onClick,
  buttonType = 'primary',
}) => {
  return (
    <button
      className={classNames('button', {
        'primary-button': buttonType === 'primary',
      })}
      onClick={() => onClick()}>
      {label}
    </button>
  );
};

export default PrimaryButton;
