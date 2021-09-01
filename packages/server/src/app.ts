import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

export default app;
