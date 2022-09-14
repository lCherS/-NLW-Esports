import express from 'express';

const app = express();

app.use(express.json());
// HTTP methods / API RESTful

app.get('/games', (req, res) => {
  return res.json([]);
})

app.post('/ads', (req, res) => {
  return res.status(201).json([]);
})

app.get('/games/:id/ads', (req, res) => {
return res.send('concluido')
})
 
app.listen(3333);