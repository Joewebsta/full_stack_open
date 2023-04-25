import express, {Request, Response} from "express";
const app = express();

app.use(express.json())

interface Person {
    id: number
    name: string
    number: string
}

const persons: Person[] = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

app.get('/api/persons', (_req: Request, res: Response) => {
  res.json(persons);
})

const PORT: number = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})