import React, { useEffect } from 'react';
import { useEvents } from '../../api/event';
import './Event.scss';
import EventView from './EventView.jsx';
import ScrollGuide from '../Scroller/ScrollGuide.jsx';

export default function EventGrid() {
  const { data: events, isFetching } = useEvents();

  if (isFetching) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className={'gridContainer'}>
        <ScrollGuide />
        <div className="gridBody">
          {events.map((event) => (
            <EventView event={event} key={event.id}></EventView>
          ))}
        </div>
      </div>
    );
  }
}
