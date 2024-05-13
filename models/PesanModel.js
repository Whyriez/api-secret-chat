import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Pesan = db.define(
  "pesan",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    is_read: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    freezeTableName: true,
  }
);
// userId: {
//   type: DataTypes.INTEGER,
//   allowNull: false,
//   validate: {
//     notEmpty: true,
//   },
// },
// Users.hasMany(Pesan);
// Pesan.belongsTo(Users, { foreignKey: "userId" });

export default Pesan;
