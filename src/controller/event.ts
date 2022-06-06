import { AppDataSource } from "../config/data-source";
import { Event } from "../entity/event";

export class EventController {
  async save(event: Event) {
    const result = await AppDataSource.manager.save(event);
    return result;
  }

  async find() {
    const result = await AppDataSource.manager.find(Event, {
      relations: {
        tickets: {
          user: true
        }
      }
    });
    return result;
  }

  async findById(idEvent: number) {
    const result = await AppDataSource.manager.findOne(Event, {
      relations: {
        tickets: {
          user: true
        }
      }, where: {
        id: idEvent
      }
    })

    return result;
  }



}