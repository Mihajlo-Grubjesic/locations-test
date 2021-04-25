import { FC } from 'react';
import './PrimaryButton.scss';

interface PrimaryButtonProps {
  label: string;
  onClick: Function;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ label, onClick }) => {
  return (
    <button className="primary-button" onClick={() => onClick()}>
      {label}
    </button>
  );
};

export default PrimaryButton;
