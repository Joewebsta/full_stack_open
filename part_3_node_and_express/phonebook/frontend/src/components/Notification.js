import React from "react"

const Notification = ({message}) => {
  if (message === null) return null

  const notificationStyle = {
    'background': 'lightgray',
    'padding': 10,
    'borderRadius': 6,
    'color': 'green',
    'fontWeight': 'bold',
    'border': '3px solid green',
    'marginBottom': 16
  }

  return (
    <div style={notificationStyle}>
      {message}
    </div>
  )
}

export default Notification