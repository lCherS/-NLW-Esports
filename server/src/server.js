import express from 'express';
const app = express();
app.get('/ads', (req, res) => {
    console.log('oi');
    return res.send('concluid');
});
app.listen(3333);
