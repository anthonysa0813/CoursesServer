const { request, response } = require("express");
const Courses = require("../models/Courses");

// get all courses
const getAllCourses = async (req = request, res = response) => {
  const { name } = req.query;
  const courses = await Courses.find();
  if (name) {
    const regexFilter = new RegExp(`${name}`, "gi");
    console.log("regex", regexFilter);
    const courseFilter = courses.filter((c) => {
      if (regexFilter.test(c.name)) {
        console.log(c);
        return c;
      }
    });
    return res.json(courseFilter);
  }
  return res.json(courses);
};

// create new course
const createNewCourse = async (req = request, res = response) => {
  const body = req.body;
  const course = await new Courses(body);
  await course.save();
  res.json(course);
};

// get course by id
const getCourseByCourseId = async (req = request, res = response) => {
  const { idCourse } = req.params;
  const course = await Courses.findById(idCourse);
  if (!course) {
    return res.status(404).json({
      message: "Course not found",
    });
  }

  res.json(course);
};

// update course
const updateCourse = async (req = request, res = response) => {
  const { idCourse } = req.params;
  const { body } = req;
  const course = await Courses.findById(idCourse);
  if (!course) {
    return res.status(404).json({
      message: "Course not found",
    });
  }
  await Courses.findByIdAndUpdate(idCourse, body);
  return res.json({
    message: "the course has been updated",
  });
};

// delete course
const deleteCourse = async (req = request, res = response) => {
  const { idCourse } = req.params;
  const course = await Courses.findById(idCourse);
  if (!course) {
    return res.status(404).json({
      message: "Course not found",
    });
  }

  await Courses.findByIdAndDelete(idCourse);
  res.json({
    message: "the course has been deleted",
  });
};

module.exports = {
  getAllCourses,
  createNewCourse,
  getCourseByCourseId,
  updateCourse,
  deleteCourse,
};
