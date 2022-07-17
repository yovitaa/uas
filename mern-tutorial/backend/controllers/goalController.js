const getGoals = (req,res) => {
    if(!req.body.text){
        res.status(400).json({message: 'jika body data tidak ditemukan parameter text, maka akan return status 400 dan ada pesan untuk menambah parameter text'})
    }        

    res.status(200).json({message: 'Get Goals'})
}

const setGoal = (req,res) => {
    res.status(200).json({message: 'Set Goal'})
}

const updateGoal = (req,res) => {
    res.status(200).json({message: 'Update Goal ${req.params.id}'})
}

const deleteGoal = (req,res) => {
    res.status(200).json({message: 'Delete Goal ${req.params.id}'})
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}
