import { Request, Response } from 'express';
import Tag from '../models/Tag';

export const getAllTags = async (req: Request, res: Response) => {
  try {
    const tags = await Tag.findAll();
    res.json(tags);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tags", error });
  }
};

export const getTagById = async (req: Request, res: Response) => {
  try {
    const tag = await Tag.findByPk(req.params.id);
    if (tag) {
      res.json(tag);
    } else {
      res.status(404).json({ message: "Tag not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching tag", error });
  }
};

export const createTag = async (req: Request, res: Response) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(201).json(newTag);
  } catch (error) {
    res.status(500).json({ message: "Error creating tag", error });
  }
};

export const updateTag = async (req: Request, res: Response) => {
  try {
    const [updated] = await Tag.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedTag = await Tag.findByPk(req.params.id);
      res.json(updatedTag);
    } else {
      res.status(404).json({ message: "Tag not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating tag", error });
  }
};

export const deleteTag = async (req: Request, res: Response) => {
  try {
    const deleted = await Tag.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Tag not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting tag", error });
  }
};
