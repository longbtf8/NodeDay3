const pool = require("@/config/database");
const taskModel = require("@/models/task.model");

const findAll = async (req, res) => {
  try {
    const rows = await taskModel.findAll();

    res.success(rows);
  } catch (error) {
    res.error({
      message: "Resource not found",
    });
  }
};
const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const row = await taskModel.findOne(id);
    res.success(row);
  } catch (error) {
    res.error({
      message: "Resource not found",
    });
  }
};
const create = async (req, res) => {
  try {
    const { title } = req.body;
    console.log(req.body);
    const row = await taskModel.create(title);
    res.success(row);
  } catch (error) {
    res.error({
      message: "Resource not found",
    });
  }
};

module.exports = { findAll, findOne, create };
