// use expresss
const express = require('express');
const app = express();
//path
//set static folde

const path = require('path');
const PORT = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, 'public')))
app.listen(PORT, () => console.log(`server Start on port ${PORT}`));
//routes for 1 index
// app.get('/', (req, res) => {
//     res.sendFIle(path.join(__dirname, 'public', 'index.html'))
// })
