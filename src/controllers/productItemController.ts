import { Request, Response } from 'express';
import ProductItem from '../models/ProductItem';

export const getAllProductItems = async (req: Request, res: Response) => {
  try {
    const productItems = await ProductItem.findAll();
    res.json(productItems);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product items", error });
  }
};

export const getProductItemById = async (req: Request, res: Response) => {
  try {
    const productItem = await ProductItem.findByPk(req.params.id);
    if (productItem) {
      res.json(productItem);
    } else {
      res.status(404).json({ message: "Product item not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching product item", error });
  }
};

export const createProductItem = async (req: Request, res: Response) => {
  try {
    const newProductItem = await ProductItem.create(req.body);
    res.status(201).json(newProductItem);
  } catch (error) {
    res.status(500).json({ message: "Error creating product item", error });
  }
};

export const updateProductItem = async (req: Request, res: Response) => {
  try {
    const [updated] = await ProductItem.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedProductItem = await ProductItem.findByPk(req.params.id);
      res.json(updatedProductItem);
    } else {
      res.status(404).json({ message: "Product item not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating product item", error });
  }
};

export const deleteProductItem = async (req: Request, res: Response) => {
  try {
    const deleted = await ProductItem.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Product item not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting product item", error });
  }
};