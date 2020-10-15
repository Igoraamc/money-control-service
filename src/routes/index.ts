import { Router } from 'express';
import transactionRouter from './transactions.routes';
import typeRouter from './types.routes';

const routes = Router();

routes.use('/transactions', transactionRouter);
routes.use('/types', typeRouter);

export default routes;
