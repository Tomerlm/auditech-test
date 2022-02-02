import Event from './event.entity.js';
import wss from '../../lib/websocket.js';

const logEvent = async (eventObject) => {
  const event = new Event(eventObject);
  await event.save();
  console.log('event logged successfuly.');
  /**
   * for the bonus section, if I had time, I would use a headless browser like puppeteer
   * to take the screenshot from the pr url, and save the image.
   * after that I would send with a websocket (as implemented below)
   * the name of the image, which then trigger in the frontend a get request to a new endpoint, the would utilize express res.sendFile(<path>) method.
   */
  _sendMessageToClients(eventObject);
};

const getEvents = async () => {
  return Event.find({}).sort([['createdAt', -1]]);
};

const _sendMessageToClients = (eventObject) => {
  wss.clients.forEach((client) => {
    if (client.readyState === 1) {
      console.log('sending message to websocket client');
      client.send(JSON.stringify(eventObject));
    }
  });
};

export default {
  logEvent,
  getEvents,
};
