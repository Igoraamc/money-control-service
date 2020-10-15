import { validate } from 'uuid';
import TypeRepository from "repositories/TypeRepository";

interface Request {
  id: string;
}

class DeleteTransactionService {
  private typeRepository: TypeRepository;

  constructor(typeRepository: TypeRepository) {
    this.typeRepository = typeRepository;
  }

  public execute({ id }: Request) {
    if (!validate(id)) {
      throw Error('Invalid uuid');
    }

    const types = this.typeRepository.all();
    const typeIndex = types.findIndex(v => v.id == id);
    
    if (typeIndex < 0) {
      throw Error('Nonexistent ID');
    }

    this.typeRepository.delete({ index: typeIndex });

    return null;
  }
}

export default DeleteTransactionService;
