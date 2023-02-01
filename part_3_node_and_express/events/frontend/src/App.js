import React from "react";
import { useState, useEffect } from "react";
import Events from "./components/events"
import Footer from "./components/footer"
import eventService from "./services/event";

const App = () => {
  const [events, setEvents] = useState([]);
  const [eventText, setEventText] = useState('');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    eventService
      .getAll()
      .then(events => setEvents(events))
  }, [])

  const handleEventChange = (e) => {
    setEventText(e.target.value);
  }

  const createEvent = async (e) => {
    e.preventDefault();

    const newEvent = {
      id: events.length + 1,
      name: eventText,
      important: false,
    }

    const returnedEvent = await eventService.create(newEvent);
    setEvents(events.concat(returnedEvent));
    setEventText('');
  }

  const toggleImportant = async (id) => {
    const event = events.find(e => e.id === id);
    const updatedEvent = { ...event, important: !event.important };
    const returnedEvent = await eventService.update(id, updatedEvent);
    const updatedEvents = events.map(e => e.id === id ? returnedEvent : e);
    setEvents(updatedEvents);
  }

  const eventsToShow = showAll ? events : events.filter(e => e.important);

  return (
    <>
      <h1>Events app</h1>
      <button onClick={() => setShowAll(!showAll)}>show {showAll ? 'important' : 'all'}</button>
      <Events events={eventsToShow} toggleImportant={toggleImportant} />
      <form action="" onSubmit={createEvent}>
        <input type="text" name="event" value={eventText} onChange={handleEventChange} />
        <button>save</button>
      </form>
      <Footer />
    </>
  );
}

export default App;
