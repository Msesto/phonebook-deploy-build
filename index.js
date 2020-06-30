require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const Person = require('./models/person-backend');

const app = express();

app.use(express.static('build'));
app.use(express.json());
app.use(cors());

morgan.token('post-req', function (req, res) {
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

app.get('/info', (req, res) => {
  console.log(Person.estimatedDocumentCount());
  Person.countDocuments({}, function (err, count) {
    res.send(`Phonebook has info for ${count} people  --  ${new Date()}`);
  });
});

app.get('/api/persons', (req, res) => {
  Person.find({}).then(each => {
    res.json(each);
  });
});

app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then(person => {
      if (person) {
        res.json(person);
      } else {
        res
          .status(404)
          .send({ error: 'inexisting ID in database' })
          .end();
      }
    })
    .catch(error => next(error));
});

app.put('/api/persons/:id', (req, res, next) => {
  const { body } = req;
  const person = {
    name: body.name,
    number: body.number,
  };

  Person.findByIdAndUpdate(req.params.id, person, {
    new: true,
    runValidators: true,
    context: 'query',
  })
    .then(updatedPerson => {
      res.json(updatedPerson);
    })
    .catch(error => next(error));
});

app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end();
    })
    .catch(error => next(error));
});

app.post('/api/persons', (req, res, next) => {
  const { body } = req;
  if (body.name === undefined) {
    return res.status(400).json({ error: 'Name missing' });
  }
  const person = new Person({
    name: body.name,
    number: body.number,
  });
  person
    .save()
    .then(savedPerson => {
      res.json(savedPerson);
    })
    .catch(error => next(error));
});

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

app.use(unknownEndpoint);

const errorHandler = (error, req, res, next) => {
  console.error(error.message);
  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' });
  }
  if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.name });
  }

  next(error);
};

app.use(errorHandler);
