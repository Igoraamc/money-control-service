import { v4 as uuid } from 'uuid';

class Spending {
  id: string;

  description: string;

  type: string;

  date: string;

  amount: number;

  constructor({ description, type, date, amount }: Omit<Spending, 'id'>) {
    this.id = uuid();
    this.description = description;
    this.type = type;
    this.date = date;
    this.amount = amount; 
  }
}

export default Spending;
