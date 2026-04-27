import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function updateProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;

    const { productId } = req.params;

    const { name, description, price, category, ingredients } = req.body;

    const product = await Product.findByIdAndUpdate(productId, {
      name,
      description,
      imagePath,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : []
    });

    res.status(201).json(product);
  } catch (error) {
    console.log(error);

    res.sendStatus(500);
  }
}
