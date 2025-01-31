import express from "express";
import {
  createBread,
  getAllBreads,
  getBreadById,
  updateBread,
  deleteBread,
  uploadImage
} from "../controllers/breadControllers";

const router = express.Router();

router.post('/create', uploadImage, createBread);
router.get("/list", getAllBreads);
router.get("/:id", getBreadById);
router.put("/update/:id", updateBread);
router.delete("/delete/:id", deleteBread);

export default router;
