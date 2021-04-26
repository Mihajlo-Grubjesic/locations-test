import path from 'path';
import ReactDOM from 'react-dom';

import initStoryshots from '@storybook/addon-storyshots';
import { create, act } from 'react-test-renderer';

const waitForNextTick = () => new Promise((resolve) => setTimeout(resolve));
ReactDOM.createPortal = (node) => node;

initStoryshots({
  asyncJest: true,
  test: async ({ story, context, done }) => {
    const snapshotFileName = path.join(
      path.dirname(context.fileName),
      '__snapshots__',
      context.fileName.split('/')[2].replace('tsx', 'storyshots'),
    );
    const storyElement = story.render();

    const tree = create(storyElement);

    await act(async () => {
      await waitForNextTick();
    });

    tree.update(storyElement);

    if (snapshotFileName) {
      expect(tree.toJSON()).toMatchSpecificSnapshot(snapshotFileName);
    }

    tree.unmount();

    done();
  },
});
