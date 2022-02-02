import { useQuery } from 'react-query';
import axios from 'axios';
import config from '../config';
const url = `${config.serverUrl}/event`;

const getEvents = async () => {
  try {
    const {
      data: { data: events },
    } = await axios.get(url);
    return events;
  } catch (e) {
    console.error(e.message);
    return e.message;
  }
};

const useEvents = () => {
  return useQuery('events', getEvents);
};

export { useEvents };
