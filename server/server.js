const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./db')

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.post('/api', (req, res) => {
  const { name } = req.body;
  db.includes(name) ? res.json({ name }) : res.json({ error: 'User doesn\'t exist!' })
})
app.listen(5000, () => {
  console.log('JSON Server is running!!!')
})
