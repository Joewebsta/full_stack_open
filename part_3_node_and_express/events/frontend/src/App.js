import { useState } from "react";
import appEvents from "./event";

const Events = ({ events, toggleImportant }) => {

  const displayEvents = (events) => {
    if (events.length === 0) return <p>No events</p>

    return events.map(e => (
      <li key={e.id}>
        {e.name}
        <button onClick={toggleImportant(e.id)}>{e.important ? 'make not important' : 'make important'}</button>
      </li>
    ))
  }

  return displayEvents(events)
}

const Footer = () => {
  return <p>Made by Joe Webster 2023</p>
}

const App = () => {
  let [events, setEvents] = useState(appEvents);
  let [eventText, setEventText] = useState('');

  const handleEventChange = (e) => {
    setEventText(e.target.value);
  }

  const createEvent = (e) => {
    e.preventDefault();

    const newEvent = {
      id: events.length + 1,
      name: eventText,
      important: false,
    }

    setEvents(events.concat(newEvent));
    setEventText('');
  }

  const toggleImportant = (id) => {
    return () => {

      const event = events.find(e => e.id === id);
      const updatedEvent = { ...event, important: !event.important };
      const updatedEvents = events.map(e => e.id === id ? updatedEvent : e);
      setEvents(updatedEvents);
    }
  }

  return (
    <>
      <h1>Events app</h1>
      <button>show important</button>
      <Events events={events} toggleImportant={toggleImportant} />
      <form action="" onSubmit={createEvent}>
        <input type="text" name="event" value={eventText} onChange={handleEventChange} />
        <button>save</button>
      </form>
      <Footer />
    </>
  );
}

export default App;
