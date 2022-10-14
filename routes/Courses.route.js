const { Router } = require("express");
const { check } = require("express-validator");
const {
  getAllCourses,
  createNewCourse,
  getCourseByCourseId,
  updateCourse,
  deleteCourse,
} = require("../controllers/courses.controller");
const { validationFields } = require("../middlewares/validationFields");

const router = Router();

// get all courses
router.get("/", getAllCourses);

// create new course
router.post(
  "/",
  [
    check("name", "El nombre es requerido").not().isEmpty(),
    check("slug", "El slug es requerido").not().isEmpty(),
    check("teacher", "El profesor es requerido").not().isEmpty(),
    check("price", "El precio es requerido").not().isEmpty(),
    check("description", "La descripción es requerido").not().isEmpty(),
    validationFields,
  ],
  createNewCourse
);

// get course by id
router.get(
  "/:idCourse",
  [check("idCourse", "El id es requerido").isMongoId(), validationFields],
  getCourseByCourseId
);

// update course
router.put(
  "/:idCourse",
  [check("idCourse", "El id es requerido").isMongoId(), validationFields],
  updateCourse
);

// delete course
router.delete(
  "/:idCourse",
  [check("idCourse", "El id es requerido").isMongoId(), validationFields],
  deleteCourse
);

module.exports = router;
