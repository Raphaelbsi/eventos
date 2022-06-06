import { Router } from 'express';
import { UserController } from '../controller/user';
import { User } from '../entity/user';


export const UserRouter = Router();

const Controller = new UserController();



UserRouter.post('/', async (req, res) => {
  const { name, email } = req.body;
  const user = new User();
  user.name = name;
  user.email = email;
  const saveUser = await Controller.save(user);

  res.json(saveUser);
});

UserRouter.get('/', async (_req, res) => {
  const users = await Controller.find();
  console.log(users);
  res.json(users);
});

UserRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await Controller.findById(+id);
  res.json(user);
});