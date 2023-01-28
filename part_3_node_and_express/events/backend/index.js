const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));
app.use(express.json());

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

let events = [
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

app.get('/api/events', (request, response) => {
  response.json(events);
});

app.get('/api/events/:id', (request, response) => {
  const { id } = request.params;
  const event = events.find((e) => e.id === Number(id));

  if (event) {
    response.json(event);
  } else {
    response.status(404).send({ error: 'Resource does not exist' });
  }
});

app.post('/api/events', (request, response) => {
  const maxId = Math.max(...events.map((event) => event.id));
  const { name, important } = request.body;

  const newEvent = {
    id: maxId + 1,
    name,
    important,
  };

  events = events.concat(newEvent);

  response.status(200).json(newEvent);
});

app.delete('/api/events/:id', (request, response) => {
  const { id } = request.params;

  events = events.filter((e) => e.id !== Number(id));

  response.status(204).end();
});

app.use(unknownEndpoint);

const PORT = 3001;
app.listen(PORT);
