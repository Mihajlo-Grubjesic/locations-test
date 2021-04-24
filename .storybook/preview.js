import { addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import '../src/index.scss';

addDecorator(StoryRouter());

if (typeof global.process === 'undefined') {
  const { worker } = require('../src/mocks/browser');
  worker.start();
}
