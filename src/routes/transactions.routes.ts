import { Router } from 'express';
import TransactionRepository from '../repositories/TransactionRepository';
import { CreateTransactionService, DeleteTransactionService } from '../services';

const routes = Router();
const transactionRepository = new TransactionRepository();

routes.get('/', (req, res) => {
  try {
    return res.json({
      transactions: [...transactionRepository.all()],
      total: transactionRepository.balance()
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

routes.post('/', (req, res) => {
  try {
    const { description, type, date, amount } = req.body;

    const createTransactionService = new CreateTransactionService(transactionRepository);
    const newTransaction = createTransactionService.execute({ description, type, date, amount })

    return res.json(newTransaction);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

routes.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const deleteTransactionService = new DeleteTransactionService(transactionRepository);
    deleteTransactionService.execute({ id });

    return res.status(200).json();
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default routes;
