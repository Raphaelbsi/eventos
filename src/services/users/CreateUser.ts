import { getRepository } from 'typeorm';
import { User } from '../../entities/user'
import { requestUser } from '../../types';


export class UserServices {
  async create({ name, email, senha }: requestUser): Promise<Error | User> {
    const repo = getRepository(User);

    const user = repo.create({ name, email, senha });

    await repo.save(user);

    return user;
  }

}