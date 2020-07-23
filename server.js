const express = require('express');
const app = express();
const { Router } = express;
const router = Router();
router.get('/', (req, res) => {
    res.send('this is index page')
})
router.get('/users', (req, res) => {
    res.send([{ 'name': 'Narayan Sharma' }, { 'name': 'Shiva Sharma' }, { 'name': 'Santosh Sharma' }, { 'name': 'Prakash Sharma' }])
})
app.use('/api', router);
app.listen(80);
