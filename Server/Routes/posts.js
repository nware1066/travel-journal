import express from 'express';
import { getPosts } from '../controllers/posts.js'

export const router = express.Router();

router.get('/', getPosts)

export default router;