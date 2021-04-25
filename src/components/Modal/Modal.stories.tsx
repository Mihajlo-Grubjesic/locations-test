import Modal from './Modal';

export default {
  title: 'Components/Modal',
};

export const LocationListStory = () => {
  return (
    <div>
      <Modal>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi
        </div>
      </Modal>
    </div>
  );
};

LocationListStory.story = {
  name: 'Modal',
};
