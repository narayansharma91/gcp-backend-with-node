const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('this is index page')
})
app.get('/users', (req, res) => {
    res.send([{'name': 'Narayan Sharma'}])
})

app.listen(80);