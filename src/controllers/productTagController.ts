import { Request, Response } from 'express';
import ProductTag from '../models/ProductTag';

export const getAllProductTags = async (req: Request, res: Response) => {
  try {
    const productTags = await ProductTag.findAll();
    res.json(productTags);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product tags", error });
  }
};

export const getProductTagById = async (req: Request, res: Response) => {
  try {
    const productTag = await ProductTag.findByPk(req.params.id);
    if (productTag) {
      res.json(productTag);
    } else {
      res.status(404).json({ message: "Product tag not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching product tag", error });
  }
};

export const createProductTag = async (req: Request, res: Response) => {
  try {
    const newProductTag = await ProductTag.create(req.body);
    res.status(201).json(newProductTag);
  } catch (error) {
    res.status(500).json({ message: "Error creating product tag", error });
  }
};

export const updateProductTag = async (req: Request, res: Response) => {
  try {
    const [updated] = await ProductTag.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedProductTag = await ProductTag.findByPk(req.params.id);
      res.json(updatedProductTag);
    } else {
      res.status(404).json({ message: "Product tag not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating product tag", error });
  }
};

export const deleteProductTag = async (req: Request, res: Response) => {
  try {
    const deleted = await ProductTag.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Product tag not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting product tag", error });
  }
};