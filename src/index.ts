import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { createPub } from './handlers/create-pub';
import { listPubs } from './handlers/list-pubs';

const app = express();

app.use(express.json(), cors());

app.get('/api/pubs', listPubs());

app.post('/api/pub', createPub());

// app.post('/api/pubs', updateTeam());

const port = process.env.PORT ?? 8095;

app.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('listening on port ', port);
});
