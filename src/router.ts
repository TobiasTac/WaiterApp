import { Router } from 'express';
import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { listProducts } from './app/useCases/products/listProducts';

export const router = Router();

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);

// List products
router.get('/products', listProducts);
