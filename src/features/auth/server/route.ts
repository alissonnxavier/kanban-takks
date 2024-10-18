/* eslint-disable @typescript-eslint/no-unused-vars */
import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { loginSchema } from '../schemas';


const app = new Hono()
    .post(
        "/login",
        zValidator("json", loginSchema),
        (c) => {
            const { email, password } = c.req.valid("json");

            return c.json({ success: "ok" });
        });

export default app;