import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { listPubs } from './handlers/list-pubs';

const app = express();

app.use(express.json(), cors());

app.get('/api/pubs', listPubs());

// app.post('/api/pubs', updateTeam());

app.listen(process.env.PORT || 8090, function () {
  // eslint-disable-next-line no-console
  console.log('listening on port ', process.env.PORT || 8090);
});
