import dotenv from 'dotenv';

dotenv.config();

import express, { Request, Response } from 'express';
import postRouter from './routes/posts';
import userRouter from './routes/users';

const app = express();
const port = process.env.PORT || 3000;

app.use(userRouter);
app.use(postRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})