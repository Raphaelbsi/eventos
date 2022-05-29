import { getRepository } from 'typeorm';
import { Event } from '../../entities/event'
import { eventRequest } from '../../types';


export class EventServices {
  async create({ date, local, price }: eventRequest): Promise<Error | Event> {
    const repo = getRepository(Event);
    const event = repo.create({ date, local, price });

    await repo.save(event);

    return event;
  }
}