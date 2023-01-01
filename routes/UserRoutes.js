import express from "express";
import {
  getPesan,
  getPesanById,
  createPesan,
  updatePesan,
  deletePesan,
  createKomen,
  getKomentarById,
  getKomentar,
} from "../controller/DataController.js";

const router = express.Router();

router.get("/pesan", getPesan);
router.get("/pesan/:id", getPesanById);
router.post("/pesan", createPesan);
router.patch("/pesan/:id", updatePesan);
router.delete("/pesan/:id", deletePesan);

router.post("/komentar/:id", createKomen);
router.get("/komentar/:id", getKomentarById);
router.get("/komentar", getKomentar);

export default router;
