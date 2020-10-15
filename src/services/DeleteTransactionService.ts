import { validate } from 'uuid';
import TransactionRepository from "repositories/TransactionRepository";

interface Request {
  id: string;
}

class DeleteTransactionService {
  private transactionRepository: TransactionRepository;

  constructor(transactionRepository: TransactionRepository) {
    this.transactionRepository = transactionRepository;
  }

  public execute({ id }: Request) {
    if (!validate(id)) {
      throw Error('Invalid uuid');
    }

    const transactions = this.transactionRepository.all();
    const transactionIndex = transactions.findIndex(v => v.id == id);
    
    if (transactionIndex < 0) {
      throw Error('Nonexistent ID');
    }

    this.transactionRepository.delete({ index: transactionIndex });

    return null;
  }
}

export default DeleteTransactionService;
