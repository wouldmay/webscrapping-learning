import express from 'express';
import { crawBrandHandler, getProductHandler } from '../controllers/crawlcontroller.js';

const router = express.Router();


// Rota para buscar os produtos de uma marca específica.
router.post('/crawl', crawBrandHandler);

router.get('/products', getProductHandler)

export default router;