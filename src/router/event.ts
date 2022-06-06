import { Router } from "express";
import { EventController } from "../controller/event";
import { UserController } from "../controller/user";
import { Event } from "../entity/event";



export const EventRouter = Router();

const Controller = new EventController();
const UsrController = new UserController();

EventRouter.get('/', async (_req, res) => {
  const events = await Controller.find();
  res.json(events);
})

EventRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const event = await Controller.findById(+id);
  res.json(event);
})

EventRouter.post('/', async (req, res) => {
  const { price, name, describe, date } = req.body;

  const event = new Event();
  event.price = price;
  event.name = name;
  event.describe = describe;
  event.date = date;
  const saveEvent = await Controller.save(event);

  res.json(saveEvent);

})

