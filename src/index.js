const expres = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const app = expres();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Config Store API');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
