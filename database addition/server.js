const express = require('express');
const app = express();
const port = 3000;
const db = require('./db'); // Import the database connection
const Person = require('./models/employee'); // Import the Person model

app.use(express.json());

app.get('/people', async (req, res) => {
    try {
        const people = await Person.find();
        res.status(200).json(people);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching people',
            details: err.message
         });
    }
});


app.post('/add-person', async (req, res) => {
    try {
        const data =  req.body;
        const newPerson = new Person(data);
        await newPerson.save();
        res.status(201).json({ message: 'Person added successfully',
            person: newPerson
         });
    }
    catch(err){
        res.status(400).json({ error: 'Error adding person',
            details: err.message
         });
    }
});

app.get('/', (req, res) => {
  res.send('First server!');
});
app.get('/object', (req, res) => {
    const obj = {
        name: 'Lucky',
        age: 20,
        gender: "female"
    };
    res.send(obj);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});