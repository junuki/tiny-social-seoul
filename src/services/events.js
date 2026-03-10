import { events } from '../data/events.js';

export async function getEvents() {
  return Promise.resolve(events);
}
