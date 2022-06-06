import { Router } from 'express';
import { TicketController } from '../controller/ticket';
import { Event } from '../entity/event';
import { Ticket } from '../entity/ticket';
import { User } from '../entity/user';


export const TickerRouter = Router();

const Controller = new TicketController();

TickerRouter.post('/', async (req, res) => {
  const { event_id, user_id } = req.body;
  const event = new Event();
  event.id = event_id;
  const user = new User();
  user.id = user_id;
  const ticket = new Ticket();
  ticket.event = event;
  ticket.user = user;
  const saveTicker = await Controller.save(ticket);

  res.json(saveTicker);
})