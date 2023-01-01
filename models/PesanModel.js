import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Pesan = db.define(
  "pesan",
  {
    text: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Pesan;

(async () => {
  await db.sync();
})();
