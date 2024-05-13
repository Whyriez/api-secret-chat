import express from "express";
import {
  checkApiKey,
  Login,
  LogOut,
  Me,
  ValidateEmail,
  ValidateUser,
} from "../controller/Auth.js";

const router = express.Router();

router.get("/me", checkApiKey, Me);
router.get("/validate/:name", checkApiKey, ValidateUser);
router.get("/validatee/:email", checkApiKey, ValidateEmail);
router.post("/login", checkApiKey, Login);
router.delete("/logout", checkApiKey, LogOut);

export default router;
