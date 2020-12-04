const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const experienceRouter = require('./routes/experiences');
const educationRouter = require('./routes/educations');
const projectRouter = require('./routes/projects');

const port = process.env.PORT || 5000;
require('dotenv').config();
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const app = express();

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('connection established with the database');
});

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/experience', experienceRouter);
app.use('/education', educationRouter);
app.use('/project', projectRouter);

// app.listen(port, () => {
//   console.log(' connexion is done on port ' + port);
// });

// const express = require('express');
// const app = express();
// const port = 5000;

// app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
