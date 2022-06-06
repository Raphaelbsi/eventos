import { AppDataSource } from "../config/data-source";
import { User } from "../entity/user";

export class UserController {
  async save(user: User) {
    const result = await AppDataSource.manager.save(user);
    return result;
  }

  async find() {
    const result = await AppDataSource.manager.find(User, {
      relations: {
        tickets: {
          event: true
        }
      }
    });
    return result;
  }

  async findById(idUser: number) {
    const result = await AppDataSource.manager.findOne(User, {
      relations: {
        tickets: {
          event: true
        }
      },
      where: {
        id: idUser
      }
    })
    return result;
  }

}

