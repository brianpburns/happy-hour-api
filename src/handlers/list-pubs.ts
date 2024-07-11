import asyncHandler from 'express-async-handler';

const isError = (error: unknown): error is Error =>
  (error as Error).message !== undefined;

export function listPubs() {
  return asyncHandler(async (_req, res) => {
    try {
      const pubs = { 1: { name: 'Carlos O Bryans' } };

      res.status(200).send(pubs);
    } catch (error) {
      console.error('Error fetching pubs', error);
      throw error;
    }
  });
}
