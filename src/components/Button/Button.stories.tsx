import Button from './Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Button',
};

export const PrimaryButtonStory = () => {
  return (
    <div>
      <Button buttonType="primary" label="OK" onClick={action('on click')} />
    </div>
  );
};

PrimaryButtonStory.story = {
  name: 'PrimaryButton',
};
