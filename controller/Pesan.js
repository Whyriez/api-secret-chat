import Pesan from "../models/PesanModel.js";
import Komen from "../models/KomenModel.js";
import Header from "../models/HeaderUser.js";
import db from "../config/Database.js";
// import FCM from "fcm-node/lib/fcm.js";

import request from "request";

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
    const response = await Pesan.findAll({
      where: {
        uuid: req.params.id,
      },
      order: [["is_read", "ASC"]],
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPesanDById = async (req, res) => {
  try {
    const response = await Pesan.findAll({
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
    request({
      url: "https://fcm.googleapis.com/fcm/send",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: ["key", process.env.SERVER_KEY].join("="),
      },
      json: {
        to: req.body.token,
        notification: {
          title: "Anda mempunyai sebuah pertanyaan baru",
          body: "klik untuk membuka!",
          icon: "logo",
        },
      },
    });
    res.status(201).json({ msg: "Pesan Created" });
  } catch (error) {
    console.log(error.message);
  }
};

// export const createFCM = async (req, res, next) => {
//   try {
//     request({
//       url: "https://fcm.googleapis.com/fcm/send",
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: ["key", process.env.SERVER_KEY].join("="),
//       },
//       json: {
//         to: req.body.token,
//         notification: {
//           title: req.body.title,
//           body: req.body.body,
//         },
//       },
//     });

//     res.status(201).json({ msg: "Success" });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const updatePesan = async (req, res) => {
  try {
    const data = req.body;
    await Pesan.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(data.is_read);
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePesan = async (req, res) => {
  try {
    await Pesan.destroy({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json(1);
  } catch (error) {
    console.log(error.message);
  }
};
export const deletePesanByid = async (req, res) => {
  try {
    await Pesan.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(204).json(1);
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

export const getKomentarByIdAs = async (req, res) => {
  try {
    const response = await Komen.findAll({
      where: {
        pesanId: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteKomenUid = async (req, res) => {
  try {
    await Komen.destroy({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json({ msg: "Komen Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteKomenid = async (req, res) => {
  try {
    await Komen.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Komen Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
