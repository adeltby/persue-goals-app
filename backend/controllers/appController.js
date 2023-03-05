const asyncHandler = require('express-async-handler')
const Goal = require('../model/goalModel')



const getGoals = asyncHandler(async (req, res)=> {
    const goals = await Goal.find();

    res.status(200).json(goals);
})



const setGoals = asyncHandler(async (req, res)=> {
    if(!req.body.text){
        res.status(400)
        throw new Error("Nothing provided!");
    }

    const goal = await Goal.create({
        text: req.body.text
    })


    res.status(200).json({goal});
})



const editGoals = asyncHandler(async (req, res)=> {

    const goal = await Goal.findById(req.params.id);

    if(!goal){
        res.status(400)
        throw new Error('Nothing to edit!')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true} )

    res.status(200).json({updatedGoal});
})



const deleteGoals = asyncHandler(async (req, res)=> {

    const goal = await Goal.findById(req.params.id);

    if(!goal){
        res.status(400)
        throw new Error("Nothing to delete!");
    }

    const deletedGoal = await Goal.findByIdAndDelete(req.params.id);

    res.status(200).json({id: req.params.id});
})


module.exports = {
    getGoals, setGoals,
    editGoals, deleteGoals

}