import { rest } from 'msw';
import { LocationsMock } from './locationsMock';

export const handlers = [
  rest.get('http://localhost:6006/undefined/locations', (req, res, ctx) => {
    return res(ctx.json(LocationsMock));
  }),
];
