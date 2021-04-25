import PrimaryButton from './PrimaryButton';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/PrimaryButton',
};

export const PrimaryButtonStory = () => {
  return (
    <div>
      <PrimaryButton label="OK" onClick={action('on click')} />
    </div>
  );
};

PrimaryButtonStory.story = {
  name: 'PrimaryButton',
};
