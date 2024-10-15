import { pgTable, serial, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm/sql';

export const usersTable = pgTable('users_table', {
    userId: uuid('user_id').default(sql`gen_random_uuid()`).primaryKey(),
    displayname: text('display_name').notNull(),
    email: text('email').notNull().unique(),
});
export const postsTable = pgTable('posts_table', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    content: text('content').notNull(),
    userId: uuid('user_id')
        .notNull()
        .references(() => usersTable.userId, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
        .notNull()
        .$onUpdate(() => new Date()),
});