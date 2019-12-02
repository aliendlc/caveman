// require('dotenv').config()

const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const app = express()

const PORT = process.env.PORT || 3000
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/' 
const session = require('express-session')
var bodyParser = require('body-parser')
var moment = require('moment');
moment().format();




app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'));
app.use(express.static('images'))
app.use(session({
//   secret: process.env.SECRET,
  secret: 'feedmeseymour',
  resave: false,
  saveUninitialized: false
}))

app.get('/app', (req, res)=>{
    res.render('/views/home.ejs', {
      })
});

app.get('/ourwork', (req, res) => {
    res.render('../views/ourWork.ejs', {
  })
})

app.get('/services', (req, res) => {
    res.render('../views/services.ejs', {
  })
})



app.listen(PORT, () => {
    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'), '🎉🎊', 'celebrations happening on port', PORT)
  })
mongoose.connect(mongoURI, { useNewUrlParser:true});
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});
