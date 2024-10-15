import express from 'express'
import { getUser } from '../controllers/userController';

const userRouter = express.Router();

// GET request to retrieve user from id
userRouter.get("/users/:id", getUser);

export default userRouter