import { Request, Response } from 'express';
import { postsTable } from '../schema';
import { db } from '../db';

export const getAllPosts = async (request: Request, response: Response) => {
    try {
        const allPosts = await db.select().from(postsTable);
        response.json(allPosts);
    } catch (error) {
        response.status(500).json({ error: 'Error fetching posts' });
    }
};