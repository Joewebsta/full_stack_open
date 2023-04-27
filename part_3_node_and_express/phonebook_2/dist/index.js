"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const uuid_1 = require("uuid");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
let persons = [
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
];
const findPersonById = (id) => {
    return persons.find(person => person.id === id);
};
app.get('/api/persons', (_req, res) => {
    res.json(persons);
});
app.get('/api/persons/:id', (req, res) => {
    const id = req.params.id;
    const person = findPersonById(id);
    if (person) {
        res.json(person);
    }
    else {
        res.status(404).json({ error: 'Person not found' });
    }
});
app.get('/info', (_req, res) => {
    const totalPeople = persons.length;
    const currentDate = new Date();
    const responseMessage = `<p>Phonebook has info for ${totalPeople}</p><p>${currentDate}<\p>`;
    res.send(responseMessage);
});
app.post('/api/persons/', (req, res) => {
    const { name, number } = req.body;
    if (!name || !number) {
        res.status(400).json({ error: 'Name and number are required' });
    }
    const newPerson = {
        id: (0, uuid_1.v4)(),
        name,
        number,
    };
    persons.push(newPerson);
    res.status(201).json(newPerson);
});
app.delete('/api/persons/:id', (req, res) => {
    const id = req.params.id;
    const person = findPersonById(id);
    if (person) {
        persons = persons.filter(p => p.id !== id);
        res.sendStatus(204);
    }
    else {
        res.status(404).json({ error: 'Person not found' });
    }
});
const unknownEndpoint = (_req, res) => {
    res.status(404).send({ error: 'unknown endpoint' });
};
app.use(unknownEndpoint);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map