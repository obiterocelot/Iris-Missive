import { Request, Response } from 'express';
import { usersTable } from '../schema';
import { db } from '../db';
import { eq } from 'drizzle-orm';

export const getUser = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const allPosts = await db.select().from(usersTable).where(eq(usersTable.userId, id));
        response.json(allPosts);
    } catch (error) {
        response.status(500).json({ error: 'Error fetching posts' });
    }
};