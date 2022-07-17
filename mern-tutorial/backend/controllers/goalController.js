
const Goal = require('../models/goalModels')

const getGoals = asyncHandler (async(req,res) => {
    if(!req.body.text){
        throw new Error('jika body data tidak ditemukan parameter text, maka akan return status 400 dan ada pesan untuk menambah parameter text')
    }        

    res.status(200).json({message: 'Get Goals'})
})

const setGoal = asyncHandler (async(req,res) => {
    res.status(200).json({message: 'Set Goal'})
})

const updateGoal = asyncHandler (async(req,res) => {
    res.status(200).json({message: 'Update Goal ${req.params.id}'})
})

const deleteGoal = asyncHandler (async(req,res) => {
    res.status(200).json({message: 'Delete Goal ${req.params.id}'})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}
