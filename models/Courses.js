const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "El nombre es requerido"],
    trim: true,
  },
  slug: {
    type: String,
    required: [true, "El slug es requerido"],
    trim: true,
  },
  status: {
    type: Boolean,
    required: false,
    default: true,
  },
  teacher: {
    type: String,
    required: [true, "El profesor es requerido"],
    trim: true,
  },
  price: {
    type: String,
    required: [true, "El precio es requerido"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "El description es requerido"],
    trim: true,
  },
});

module.exports = mongoose.model("Course", CourseSchema);
