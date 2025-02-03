import express from 'express';
import {
  getAllProductItems,
  getProductItemById,
  createProductItem,
  updateProductItem,
  deleteProductItem
} from '../controllers/productItemController';

const router = express.Router();

router.get('/', getAllProductItems);
router.get('/:id', getProductItemById);
router.post('/', createProductItem);
router.put('/:id', updateProductItem);
router.delete('/:id', deleteProductItem);

export default router;