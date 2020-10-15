import Type from '../models/Type';

interface CreateTypeDTO {
  name: string;
}

interface DeleteTypeDTO {
  index: number;
}

class TypeRepository {
  private types: Type[];

  constructor() {
    this.types = [];
  }

  public all(): Type[] {
    return this.types;
  }

  public create({ name }: CreateTypeDTO): Type {
    const type = new Type({ name });

    this.types.push(type);

    return type;
  }

  public getTypeByName({ name }: Omit<Type, 'id'>): Type | null {
    const type = this.types.filter(v => v.name == name)[0];
    return type;
  }

  public delete({ index }: DeleteTypeDTO) {
    this.types.splice(index, 1);

    return null
  }
}

export default TypeRepository;
