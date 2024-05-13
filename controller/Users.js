import Users from "../models/UserModel.js";
import argon2 from "argon2";

export const getUsers = async (req, res) => {
  try {
    const response = await Users.findAll({
      attributes: ["uuid", "name", "email", "role", "createdAt", "updatedAt"],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUsersById = async (req, res) => {
  try {
    const response = await Users.findOne({
      attributes: [
        "uuid",
        "name",
        "email",
        "role",
        "token",
        "createdAt",
        "updatedAt",
      ],
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createUsers = async (req, res) => {
  const { name, email, password, confirmPassword, role, token } = req.body;
  if (password != confirmPassword)
    return (
      req,
      status(400).json({ message: "Password dan Confirm Password Not Match" })
    );
  const hashPassword = await argon2.hash(password);

  const usrname = await Users.findOne({
    where: {
      name: name,
    },
  });

  const emil = await Users.findOne({
    where: {
      email: email,
    },
  });

  if (usrname) {
    return res.status(400).json({ message: "Username Sudah Ada" });
  }

  if (emil) {
    return res.status(400).json({ message: "Email Sudah Ada" });
  }

  try {
    await Users.create({
      name: name,
      email: email,
      password: hashPassword,
      role: role,
      token: token,
    });
    res.status(201).json({ message: "Register Successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateUsers = async (req, res) => {
  const user = await Users.findOne({
    where: {
      uuid: req.params.id,
    },
  });

  if (!user) return res.status(404).json({ meesage: "User Not Found" });
  const { name, email, password, confirmPassword, role } = req.body;
  let hashPassword;
  if (password === "" || password === null) {
    hashPassword = user.password;
  } else {
    hashPassword = await argon2.hash(password);
  }
  if (password != confirmPassword) {
    return (
      req,
      status(400).json({ message: "Password dan Confirm Password Not Match" })
    );
  }

  try {
    await Users.update(
      {
        name: name,
        email: email,
        password: hashPassword,
        role: role,
      },
      {
        where: {
          id: user.id,
        },
      }
    );
    res.status(200).json({ message: "User Successfully Updated" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateUsersByUUID = async (req, res) => {
  try {
    await Users.update(req.body, {
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json(1);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteUsers = async (req, res) => {
  const user = await Users.findOne({
    where: {
      uuid: req.params.id,
    },
  });

  if (!user) return res.status(404).json({ meesage: "User Not Found" });
  try {
    await Users.destroy({
      where: {
        id: user.id,
      },
    });
    res.status(200).json(1);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
