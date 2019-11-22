// use expresss
const express = require('express');
const app = express();
const logger = require('./middleware/logger');
//path
const path = require('path');
const PORT = process.env.PORT || 5000;
//database
const members = require('./Members')
//path

//init middleware
app.use(logger)

//all members
app.get('/api/members', (req, res) => {
    res.json(members)
})

//set static folde
app.use(express.static(path.join(__dirname, 'public')))
app.listen(PORT, () => console.log(`server Start on port ${PORT}`));
//routes for 1 index
// app.get('/', (req, res) => {
//     res.sendFIle(path.join(__dirname, 'public', 'index.html'))
// })
