import Transaction from '../models/Transaction';

interface CreateTransactionDTO {
  description: string;
  type: string;
  date: string;
  amount: number;
}

interface DeleteTransactionDTO {
  index: number;
}

class TransactionRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public balance(): number {
    let total: number = 0;
    this.transactions.forEach(v => {
      total = total + v.amount;
    });

    return total;
  }

  public create({ description, type, date, amount }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ description, type, date, amount });

    this.transactions.push(transaction);

    return transaction;
  }

  public delete({ index }: DeleteTransactionDTO) {
    this.transactions.splice(index, 1);

    return null
  }
}

export default TransactionRepository;
