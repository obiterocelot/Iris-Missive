import express from 'express'
import { getAllPosts } from '../controllers/postController';

const postRouter = express.Router();

// GET request to retrieve all posts
postRouter.get("/posts", getAllPosts);

export default postRouter;