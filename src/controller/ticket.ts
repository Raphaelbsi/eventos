import { Ticket } from "../entity/ticket";
import { AppDataSource } from "../config/data-source";

export class TicketController {
  async save(ticket: Ticket) {
    const result = await AppDataSource.manager.save(ticket);
    return result;
  }

}