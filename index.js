require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const port = 3000
const userRoutes = require('./route/user')
const bookRoutes = require('./route/book')


app.use(cors());
app.use(express.json());
app.use('/api/user', userRoutes);
app.use('/api/book', bookRoutes);

console.log(process.env.LIBRARY);
mongoose
.connect(process.env.LIBRARY)
.then(() => console.log("Connected"))
.catch(() => console.log("Error"));

app.get('/', (req, res) => {
   

    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })