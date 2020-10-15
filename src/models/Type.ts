import { v4 as uuid } from 'uuid';

class Type {
  id: string;

  name: string;

  constructor({ name }: Omit<Type, 'id'>) {
    this.id = uuid();
    this.name = name;
  }
}

export default Type;
