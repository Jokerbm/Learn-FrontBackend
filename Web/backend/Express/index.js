// use expresss
const express = require('express');
const app = express();
const exphbs = require('express-handlebars')
const logger = require('./middleware/logger');
const members = require('./Members')
//path
const path = require('path');
const PORT = process.env.PORT || 5000;
//handlebar middleare
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
//init middleware
app.use(logger)
//body parser middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
//Home page
app.get('/', (req, res) =>res.render('layouts/index',{
    title: 'Member App',
    members

}))
//set static folder
app.use(express.static(path.join(__dirname, 'public')))
//members api route
app.use('/api/members', require('./routes/api/members'))
app.listen(PORT, () => console.log(`server Start on port ${PORT}`));
//routes for 1 index
// app.get('/', (req, res) => {
//     res.sendFIle(path.join(__dirname, 'public', 'index.html'))
// })
