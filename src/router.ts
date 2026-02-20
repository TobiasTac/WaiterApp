import { createCategory } from 'app/useCases/categories/createCategory';
import { Router } from 'express';
import { listCategories } from './app/useCases/categories/listCategories';

export const router = Router();

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);
