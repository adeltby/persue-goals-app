const express = require("express");
const {
  setGoals,
  getGoals,
  editGoals,
  deleteGoals,
} = require("../controllers/appController");
const router = express.Router();
const { protect } = require("../middleware/authMiddleWare");

router.route("/").get(protect, getGoals).post(protect, setGoals);

router.route("/:id").put(protect, editGoals).delete(protect, deleteGoals);

module.exports = router;
