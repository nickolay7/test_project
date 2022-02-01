const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');

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
  res.json({ name })
})
app.listen(5000, () => {
  console.log('JSON Server is running!!!')
})
