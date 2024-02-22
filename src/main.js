const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require('path');
const app = express();
const port = 3001;


app.use(express.static(path.join(__dirname, 'public')));

// Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources\\views'));

// HTTP logger
app.use(morgan('combined'));

// HTTP
app.get("/", (req, res) => {
  res.render('home');
});

app.get("/news", (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
