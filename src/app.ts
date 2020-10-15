import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser());
app.use(express.json());

export default app;
