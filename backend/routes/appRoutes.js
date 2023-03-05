const express = require('express')
const { setGoals, getGoals, editGoals, deleteGoals } = require('../controllers/appController')
const router = express.Router()

router.route('/').get(getGoals).post(setGoals)

router.route('/:id').put(editGoals).delete(deleteGoals)


module.exports = router