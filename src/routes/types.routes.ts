import { Router } from 'express';
import TypeRepository from '../repositories/TypeRepository';
import { CreateTypeService, DeleteTypeService } from '../services';

const routes = Router();
const typeRepository = new TypeRepository();

routes.get('/', (req, res) => {
  try {
    const types = typeRepository.all();
    return res.json({ types: [...types] });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

routes.post('/', (req, res) => {
  try {
    const { name } = req.body;

    const createTypeService = new CreateTypeService(typeRepository);
    const newType = createTypeService.execute({ name })

    return res.json(newType);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

routes.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const deleteTypeService = new DeleteTypeService(typeRepository);
    deleteTypeService.execute({ id });

    return res.status(200).json();
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default routes;
