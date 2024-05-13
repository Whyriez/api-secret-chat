import Header from "../models/HeaderUser.js";
import db from "../config/Database.js";

export const getHeader = async (req, res) => {
  try {
    const response = await Header.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getHeaderById = async (req, res) => {
  try {
    const response = await Header.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getHeaderByName = async (req, res) => {
  try {
    const response = await Header.findOne({
      where: {
        nama: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createHeader = async (req, res) => {
  try {
    await Header.create(req.body);
    const data = req.body
    res.status(201).json({ 
      data: data,
      code: 200,
      message: "Header Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateHeader = async (req, res) => {
  try {
    await Header.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(req.body);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteHeader = async (req, res) => {
  try {
    await Header.destroy({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json(1);
  } catch (error) {
    console.log(error.message);
  }
};
