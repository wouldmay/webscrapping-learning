import express from 'express';
import { crawBrandHandler } from '../controllers/crawlcontroller.js';

const router = express.Router();


// Rota para buscar os produtos de uma marca específica.
router.post('/crawl', crawBrandHandler);

export default router;