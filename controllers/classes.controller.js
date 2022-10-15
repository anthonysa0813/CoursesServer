const { request, response } = require("express");
const Classes = require("../models/Classes");
const Class = require("../models/Classes");

// get all classes
const getClasses = async (req = request, res = response) => {
  const classes = await Class.find();
  res.json(classes);
};

// create a new class
const createNewClass = async (req = request, res = response) => {
  const { body } = req;
  const classObject = new Class(body);
  await classObject.save();
  res.json(classObject);
};

// get class by id
const getClassById = async (req = request, res = response) => {
  const { idClass } = req.params;
  const classObject = await Class.findById(idClass);

  res.json(classObject);
};

// update class
const updateClass = async (req = request, res = response) => {
  const { idClass } = req.params;
  const { body } = req;
  const classObject = await Class.findById(idClass);

  if (!classObject) {
    return res.status(404).json({
      message: "La clase no se encuentra",
    });
  }

  await Class.findByIdAndUpdate(idClass, body);
  res.json({
    message: "the class has been updated successfully",
  });
};

// delete a class
const deleteClass = async (req = request, res = response) => {
  const { idClass } = req.params;
  const classObject = await Class.findById(idClass);
  if (!classObject) {
    return res.status(404).json({
      message: "don't exist the class",
    });
  }
  await Class.findByIdAndDelete(idClass);
  res.json({
    message: "the class has been deleted successfully",
  });
};

module.exports = {
  getClasses,
  createNewClass,
  getClassById,
  updateClass,
  deleteClass,
};
