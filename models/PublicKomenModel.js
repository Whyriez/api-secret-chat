import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const PublicKomen = db.define(
  "komentar_public",
  {
    textKt: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    pesanPublicId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);

// Pesan.hasMany(PublicKomen);
// PublicKomen.belongsTo(Pesan, { foreignKey: "idPesan_public" });

export default PublicKomen;
