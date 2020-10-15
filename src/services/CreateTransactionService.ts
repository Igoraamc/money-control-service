import TransactionRepository from "../repositories/TransactionRepository";
import Transaction from "../models/Transaction";

interface Request {
  description: string;
  type: string;
  date: string;
  amount: number;
}

class CreateTransactionService {
  private transactionRepository: TransactionRepository;

  constructor(transactionRepository: TransactionRepository) {
    this.transactionRepository = transactionRepository;
  }

  public execute({ description, type, date, amount }: Request): Transaction {
    if (typeof description !== 'string') {
      throw Error('Invalid type of title');
    }
    if (typeof amount !== 'number') {
      throw Error('Invalid type of value');
    }

    const transaction = this.transactionRepository.create({ description, type, date, amount });
    return transaction;
  }
}

export default CreateTransactionService;
