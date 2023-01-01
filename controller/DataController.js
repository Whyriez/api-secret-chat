import Pesan from "../models/PesanModel.js";
import Komen from "../models/KomenModel.js";

export const getPesan = async (req, res) => {
  try {
    const response = await Pesan.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPesanById = async (req, res) => {
  try {
    const response = await Pesan.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPesan = async (req, res) => {
  try {
    await Pesan.create(req.body);
    res.status(201).json({ msg: "Pesan Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePesan = async (req, res) => {
  try {
    await Pesan.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Pesan Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePesan = async (req, res) => {
  try {
    await Pesan.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Pesan Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

export const createKomen = async (req, res) => {
  try {
    await Komen.create(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Komentar Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const getKomentar = async (req, res) => {
  try {
    const response = await Komen.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getKomentarById = async (req, res) => {
  try {
    const response = await Komen.findAll({
      where: {
        idPesan: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
