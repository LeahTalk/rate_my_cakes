const express = require("express");
const app = express();
const session = require('express-session');
const flash = require('express-flash');
const bodyParser = require('body-parser')

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.json());
app.use(flash());
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

require('./server/config/routes.js')(app);
app.listen(8000, () => console.log("listening on port 8000"));