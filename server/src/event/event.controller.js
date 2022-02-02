import express from 'express';
import eventService from './event.service.js';
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    console.log('event recieved 📨');
    const data = JSON.parse(req.body.payload);
    const { title, html_url, created_at } = data['pull_request'];

    const eventObject = {
      title: title,
      prLink: html_url,
      username: data.sender.login,
      createdAt: created_at,
    };

    await eventService.logEvent(eventObject);
    res.send(req.body);
  } catch (e) {
    console.error(e.message);
    res.sendStatus(500);
  }
});

router.get('/', async (req, res) => {
  try {
    console.log('getting events');
    const events = await eventService.getEvents();
    console.log(events);
    res.send({ data: events });
  } catch (e) {
    console.error(e.message);
    res.sendStatus(500);
  }
});

export default router;
