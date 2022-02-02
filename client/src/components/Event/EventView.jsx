import React from 'react';
import './Event.scss'

export default function EventView({event}) {
    return (
        <div className="eventViewContainer">
            <div className="title">Title: {event.title}</div>
            <div className="createdAt">Created At: {event.createdAt}</div>
            <a href={event.prLink} className="link" target="_blank">Link to PR </a>
        </div>
    )
}