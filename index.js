const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

morgan.token('post-req', function(req, res) {
  if (Object.values(req.body).length > 0) {
    return JSON.stringify(req.body);
  }
  return null;
});
app.use(
  morgan(
    ':method :url :status :res[content-length] - :response-time ms :post-req'
  )
);

app.use(express.json());
app.use(cors());
app.use(express.static('build'));

let persons = [
  {
    name: 'Arto Hellas',
    number: '040-123456',
    id: 1,
  },
  {
    name: 'Ada Lovelace',
    number: '39-44-5323523',
    id: 2,
  },
  {
    name: 'Dan Abramov',
    number: '12-43-234345',
    id: 3,
  },
  {
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
    id: 4,
  },
];

app.get('/info', (req, res) => {
  res.send(`Phonebook has info for ${persons.length} people ${new Date()}`);
});

app.get('/api/persons', (req, res) => {
  res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
  const { id } = req.params;
  const person = persons.find(each => each.id === Number(id));
  /*eslint-disable*/
  person ? res.json(person) : res.status(404).end();
});

app.delete('/api/persons/:id', (req, res) => {
    const { id } = req.params;
    persons = persons.filter(each => each.id !== Number(id));
    res.status(204).end()
  });
  
app.post('/api/persons', (req, res) => {
    const maxId = persons.length > 0
    ? Math.max(...persons.map(n => n.id)) 
    : 0
    const incoming = req.body;
    const person = {
        name: incoming.name,
        number: incoming.number,
        id: maxId + 1,
    }
    if(!(person.name && person.number)){
        return res.status(400).json({ 
            error: 'Name or phone number are missing.' 
          })
    }
    if(persons.find(each => each.name === person.name)){
        return res.status(400).json({ 
            error: `${person.name} is already in the phonebook.` 
          })
    }
    persons = persons.concat(person);
    res.json(person);
  })

  const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

