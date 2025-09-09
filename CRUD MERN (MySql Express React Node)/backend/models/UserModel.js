import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const User = db.define(
  "users",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default User;

(async () => {
  try {
    await db.sync();
    console.log("✅ Database synced successfully");
  } catch (error) {
    console.error("❌ Failed to sync database:", error.message);
  }
})();
