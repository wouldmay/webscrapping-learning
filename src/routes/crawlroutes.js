import express from 'express';
import { getProductHandler } from '../controllers/crawlcontroller.js';

const router = express.Router();

router.get('/products', getProductHandler)

export default router;