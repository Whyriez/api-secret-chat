import express from "express";
import {
  getTanggapan,
  getTanggapanById,
  createTanggapan,
  updateTanggapan,
  deleteTanggapan,
  createKomenTanggapan,
  createKomenTanggapanByid,
  getKomentarTanggapanById,
  getKomentarTanggapan,
} from "../controller/Public.js";
import { checkApiKey } from "../controller/Auth.js";

const router = express.Router();

router.get("/tanggapan", checkApiKey, getTanggapan);
router.get("/tanggapan/:id", checkApiKey, getTanggapanById);
router.post("/tanggapan", checkApiKey, createTanggapan);
router.patch("/tanggapan/:id", checkApiKey, updateTanggapan);
router.delete("/tanggapan/:id", checkApiKey, deleteTanggapan);

router.post("/komentar-tanggapan/:id", checkApiKey, createKomenTanggapanByid);
router.post("/komentar-tanggapan", checkApiKey, createKomenTanggapan);
router.get("/komentar-tanggapan/:id", checkApiKey, getKomentarTanggapanById);
// router.get("/komentar-tanggapan/:id", getKomentarTanggapanJoin);
router.get("/komentar-tanggapan", checkApiKey, getKomentarTanggapan);

export default router;
