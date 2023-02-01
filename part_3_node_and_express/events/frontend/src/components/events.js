import React from "react"

const Events = ({ events, toggleImportant }) => {
  const displayEvents = (events) => {
    if (events.length === 0) return <p>No events</p>

    return events.map(e => (
      <li key={e.id}>
        {e.name}
        <button onClick={() => toggleImportant(e.id)}>{e.important ? 'make not important' : 'make important'}</button>
      </li>
    ))
  }

  return displayEvents(events)
}

export default Events;