const express = require("express");
const tasksController = require("@/controllers/task.controllers");
const router = express.Router();

router.get("/", tasksController.findAll);
