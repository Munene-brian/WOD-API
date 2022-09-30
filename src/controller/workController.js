const workService = require("../services/workService");

const getAllWorkouts = (req, res) => {
    const allwork = workService.getAllWorkouts();
    res.json({status:"ok", data:allwork});
  };
  
  const getOneWorkout = (req, res) => {
    const work = workService.getOneWorkout();
    res.send("Get an existing workout");
  };
  
  const createNewWorkout = (req, res) => {
    const createdWork = workService.createNewWorkout();
    res.send("Create a new workout");
  };
  
  const updateOneWorkout = (req, res) => {
    const updateWork = workService.updateOneWorkout();
    res.send("Update an existing workout");
  };
  
  const deleteOneWorkout = (req, res) => {
    workService.deleteOneWorkout()
    res.send("Delete an existing workout");
  };
  
  module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  };