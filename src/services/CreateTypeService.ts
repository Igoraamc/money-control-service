import TypeRepository from "../repositories/TypeRepository";
import Type from "../models/Type";

interface Request {
  name: string;
}

class CreateTypeService {
  private typeRepository: TypeRepository;

  constructor(typeRepository: TypeRepository) {
    this.typeRepository = typeRepository;
  }

  public execute({ name }: Request): Type {
    if (typeof name !== 'string') {
      throw Error('Invalid type of name');
    }

    const isNewType = this.typeRepository.getTypeByName({ name });
    if (isNewType != null) {
      throw Error('Type name already in use');
    }

    const type = this.typeRepository.create({ name });
    return type;
  }
}

export default CreateTypeService;
