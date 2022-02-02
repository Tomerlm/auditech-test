import mongoose from '../../lib/mongo.js';

const Event = mongoose.model('Event', {
  title: String,
  prLink: String,
  username: String,
  createdAt: Date,
});

export default Event;
