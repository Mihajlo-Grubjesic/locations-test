import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:6006/undefined/locations', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: '1',
          createdAt: '2021-03-05T09:10:35.462Z',
          name: 'McGlynnview',
          userCount: 6221,
          description: 'Investment Account',
        },
        {
          id: '2',
          createdAt: '2021-03-04T19:53:53.946Z',
          name: 'Garthburgh',
          userCount: 94343,
          description: 'needs-based intangible',
        },
        {
          id: '3',
          createdAt: '2021-03-04T17:08:15.954Z',
          name: 'New Raina',
          userCount: 66367,
          description: 'hub Configuration',
        },
        {
          id: '4',
          createdAt: '2021-03-04T18:29:55.591Z',
          name: 'Fadelhaven',
          userCount: 32882,
          description: 'Creative',
        },
      ]),
    );
  }),
];
