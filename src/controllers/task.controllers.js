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
    console.log(title);
    const row = await taskModel.create(title);
    if (row) {
      res.success({
        message: "Done",
      });
    } else {
      res.error({
        message: "Error create",
      });
    }
  } catch (error) {
    res.error({
      message: "Resource not found",
    });
  }
};
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    console.log(id, title);
    const row = await taskModel.update(id, title);
    if (row) {
      res.success({
        message: "Done",
      });
    } else {
      res.error({
        message: "Error Update",
      });
    }
  } catch (error) {
    res.error({
      message: "Resource not found",
    });
  }
};
const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const row = await taskModel.destroy(id);
    if (row) {
      res.success({
        message: "Done",
      });
    } else {
      res.error({
        message: "Error delete",
      });
    }
  } catch (error) {
    res.error({
      message: "Resource not found",
    });
  }
};

module.exports = { findAll, findOne, create, update, destroy };
