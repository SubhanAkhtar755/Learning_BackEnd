import express from 'express';
import postUser from "./post.js"
const router = express.Router();

router.post('/post', postUser);

export default router;