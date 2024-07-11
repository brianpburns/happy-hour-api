import asyncHandler from 'express-async-handler';
import data from '../pubs.json';

const isError = (error: unknown): error is Error =>
  (error as Error).message !== undefined;

export function listPubs() {
  return asyncHandler(async (_req, res) => {
    try {
      res.status(200).send(data);
    } catch (error) {
      console.error('Error fetching pubs', error);
      throw error;
    }
  });
}
