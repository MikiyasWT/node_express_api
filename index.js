import express from 'express';
import bodyParser from 'body-parser';
import usersRoute from './routes/users.js';



const app = express();

app.use(bodyParser.json());

app.use('/users',usersRoute)

const PORT = 5000;

app.listen(PORT,() => console.log(`app runing on http://localhost:${PORT}`))