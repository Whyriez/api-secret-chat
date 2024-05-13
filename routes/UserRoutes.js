import express from "express";
import {
  getUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers,
  updateUsersByUUID,
} from "../controller/Users.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";
import { checkApiKey } from "../controller/Auth.js";

const router = express.Router();

router.get("/users", checkApiKey, verifyUser, adminOnly, getUsers);
router.get("/users/:id", checkApiKey, getUsersById);
router.get("/tokens/:id", checkApiKey, getUsersById);
router.post("/users", checkApiKey, createUsers);
router.patch("/users/:id", checkApiKey, updateUsers);
router.patch("/uusers/:id", checkApiKey, updateUsersByUUID);
router.delete("/users/:id", checkApiKey, deleteUsers);

export default router;
