const express = require('express');
const app = express();
const port = 3000;

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