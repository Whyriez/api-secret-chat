import express from "express";
import {
  getHeader,
  getHeaderById,
  getHeaderByName,
  createHeader,
  updateHeader,
  deleteHeader,
} from "../controller/Header.js";
import { checkApiKey } from "../controller/Auth.js";

const router = express.Router();

router.get("/user_header", checkApiKey, getHeader);
router.get("/user_header/:id", checkApiKey, getHeaderById);
router.get("/header-name/:id", checkApiKey, getHeaderByName);
router.post("/user_header", checkApiKey, createHeader);
router.patch("/user_header/:id", checkApiKey, updateHeader);
router.delete("/user_header/:id", checkApiKey, deleteHeader);

export default router;
