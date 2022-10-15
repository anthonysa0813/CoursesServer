const { Router } = require("express");
const { check } = require("express-validator");
const {
  getClasses,
  createNewClass,
  getClassById,
  updateClass,
  deleteClass,
} = require("../controllers/classes.controller");
const { validationFields } = require("../middlewares/validationFields");

const router = Router();

// get all classes
router.get("/", getClasses);

// create a new class
router.post(
  "/",
  [
    check("title", "el titulo es requerido").not().isEmpty(),
    check("slug", "El slug es requerido").not().isEmpty(),
    check("resumen", "El resumen es requerido").not().isEmpty(),
    validationFields,
  ],
  createNewClass
);

// get class by id
router.get(
  "/:idClass",
  [check("idClass", "el id es inválido").isMongoId(), validationFields],
  getClassById
);

// update a class
router.put(
  "/:idClass",
  [check("idClass", "el id inválido").isMongoId(), validationFields],
  updateClass
);

// delete a class
router.delete(
  "/:idClass",
  [check("idClass", "el id inválido").isMongoId(), validationFields],
  deleteClass
);

module.exports = router;
