import { useState } from "react";
import appEvents from "./event";

const Footer = () => {
  return <p>Made by Joe Webster 2023</p>
}

const App = () => {
  let [events, setEvents] = useState(appEvents);
  let [eventText, setEventText] = useState('');

  const displayEvents = (events) => {
    if (events.length === 0) return <p>No events</p>

    return events.map(e => (
      <li key={e.id}>
        {e.name}
        <button>{e.important ? 'make not important' : 'make important'}</button>
      </li>
    ))
  }

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

  return (
    <>
      <h1>Events app</h1>
      <button>show important</button>
      <ul>
        {displayEvents(events)}
      </ul>
      <form action="" onSubmit={createEvent}>
        <input type="text" name="event" value={eventText} onChange={handleEventChange} />
        <button>save</button>
      </form>
      <Footer />
    </>
  );
}

export default App;
