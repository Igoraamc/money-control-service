import { Router } from 'express';
import transactionRouter from './transactions.routes';

const routes = Router();

routes.use('/transactions', transactionRouter);

export default routes;
