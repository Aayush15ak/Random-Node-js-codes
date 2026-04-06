const express = require('express');
const passport = require('./auth');
const app = express();
const port = 3000;
app.use(express.json());

app.use(passport.initialize());

const localauth = passport.authenticate('local', { session: false });

app.post('/login', localauth, (req, res) => {
  res.json({ message: 'Login successful' });
});
 // Import the authentication configuration
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Add your authentication logic here
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});