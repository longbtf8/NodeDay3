const pool = require("@/config/database");
const findAll = async () => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM tasks ORDER BY created_at DESC;",
    );
    return rows;
  } catch (error) {
    console.log(error);
  }
};

const findOne = async (id) => {
  try {
    const [rows] = await pool.query(`SELECT * FROM tasks WHERE id = ${id};`);
    return rows[0];
  } catch (error) {
    console.log(error);
  }
};
const create = async (taskData) => {
  try {
    const title = taskData;
    const [rows] = await pool.query(
      `INSERT INTO tasks (title) VALUES (${title})`,
    );
    if (rows) {
      console.log(rows);
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = { findAll, findOne, create };
