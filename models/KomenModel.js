import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Komen = db.define(
  "komentar",
  {
    idPesan: DataTypes.INTEGER,
    text: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Komen;

(async () => {
  await db.sync();
})();
