import express from "express";
import {
  getPesan,
  getPesanById,
  createPesan,
  updatePesan,
  deletePesan,
  deletePesanByid,
  getPesanDById,
  createKomen,
  getKomentarById,
  getKomentarByIdAs,
  getKomentar,
  deleteKomenid,
  deleteKomenUid,
} from "../controller/Pesan.js";
import { checkApiKey } from "../controller/Auth.js";

const router = express.Router();

router.get("/pesan-saya", checkApiKey, getPesan);
router.get("/pesan-saya/:id", checkApiKey, getPesanById);
router.get("/pesan-sayaid/:id", checkApiKey, getPesanDById);
router.post("/pesan-saya", checkApiKey, createPesan);
router.patch("/pesan-saya/:id", checkApiKey, updatePesan);
router.delete("/pesan-saya/:id", checkApiKey, deletePesan);
router.delete("/pesan-sayaid/:id", checkApiKey, deletePesanByid);

// router.post("/komentar-pesan/:id", createKomen);
router.post("/komentar-pesan/", checkApiKey, createKomen);
router.get("/komentar-pesan/:id", checkApiKey, getKomentarById);
router.get("/komentar-pesanid/:id", checkApiKey, getKomentarByIdAs);
router.get("/komentar-pesan", checkApiKey, getKomentar);
router.delete("/komentar-pesan/:id", checkApiKey, deleteKomenUid);
router.delete("/komentar-pesanid/:id", checkApiKey, deleteKomenid);

export default router;
