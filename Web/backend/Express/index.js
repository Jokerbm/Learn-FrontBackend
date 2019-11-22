// use expresss
const express = require('express');
const app = express();
const logger = require('./middleware/logger');
//path
const path = require('path');
const PORT = process.env.PORT || 5000;
//init middleware
app.use(logger)
//body parser middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: false}))
//set static folder
app.use(express.static(path.join(__dirname, 'public')))
//members api route
app.use('/api/members', require('./routes/api/members'))
app.listen(PORT, () => console.log(`server Start on port ${PORT}`));
//routes for 1 index
// app.get('/', (req, res) => {
//     res.sendFIle(path.join(__dirname, 'public', 'index.html'))
// })
