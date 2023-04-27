import { UUID } from "crypto";
import express, {Request, Response} from "express";
import morgan from 'morgan';
import { v4 as uuidv4 } from 'uuid';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(express.static('build'));
app.use(morgan('dev'));
app.use(cors());

interface Person {
    id: string | UUID
    name: string
    number: string
}

let persons: Person[] = [
  { 
    "id": "1",
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": "2",
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": "3",
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": "4",
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

const findPersonById = (id: string) => {
  return persons.find(person => person.id === id);
}

app.get('/api/persons', (_req: Request, res: Response) => {
  res.json(persons);
});

app.get('/api/persons/:id', (req: Request, res: Response) => {
  const id: string = req.params.id;
  const person = findPersonById(id);
  
  if (person) {
    res.json(person);
  } else {
    res.status(404).json({ error: 'Person not found' });
  }
});

app.get('/info', (_req:Request, res: Response) => {
  const totalPeople: number = persons.length;
  const currentDate: Date = new Date();
  const responseMessage: string = `<p>Phonebook has info for ${totalPeople}</p><p>${currentDate}<\p>`

  res.send(responseMessage)
});

app.post('/api/persons/', (req, res) => {
  const {name, number} = req.body;

  if (!name || !number) {
    res.status(400).json({ error: 'Name and number are required' });
  }

  const newPerson = {
    id: uuidv4(),
    name,
    number,
  }

  persons.push(newPerson);

  res.status(201).json(newPerson);
});

app.delete('/api/persons/:id', (req, res) => {
  const id: string = req.params.id;
  const person = findPersonById(id);
  
  if (person) {
    persons = persons.filter(p => p.id !== id);
    res.sendStatus(204);
  } else {
    res.status(404).json({ error: 'Person not found' });
  }
});

const unknownEndpoint = (_req: Request, res: Response) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint);

const PORT: number | string = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});