const express = require('express')
const app = express()
const port = 3000

const config = require('./config/key')

const { User } = require("./models/User");

app.use(express.json()) //For JSON requests
app.use(express.urlencoded({extended: true}));

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI)
.then(() => console.log('MongoDB Connected..'))
.catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!  hellosdafsaasdfsdfdf')
})

app.post('/register', (req, res) => {
  const user = new User(req.body);

  user.save()
  .then(() => {
    res.status(200).json({
      success: true,
    });
  })
  .catch((err) => {
    console.error(err);
    res.json({
      success: false,
      err: err,
    });
  });
});
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})