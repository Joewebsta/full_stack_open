import { useState } from "react";

const displayEvents = (events) => {
  if (events.length === 0) return <p>No events</p>

  return events.map(e => (
    <li key={e.id}>
      {e.name}
      <button>{e.important ? 'make not important' : 'make important'}</button>
    </li>
  ))
}

const Footer = () => {
  return <p>Made by Joe Webster 2023</p>
}

const App = () => {
  let appEvents = [
    {
      id: 1,
      name: 'Harvard Museum of Natural History',
      important: false,
    },
    {
      id: 2,
      name: 'New Years Eve',
      important: false,
    },
    {
      id: 3,
      name: 'Ricky\'s Miami Bachelor Party',
      important: false,
    },
  ];

  const [events, setEvents] = useState(appEvents);

  return (
    <>
      <h1>Events app</h1>
      <button>show important</button>
      <ul>
        {displayEvents(events)}
      </ul>
      <Footer />
    </>
  );
}

export default App;
