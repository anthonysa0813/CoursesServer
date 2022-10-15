const mongoose = require("mongoose");

const ClassesSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "El titulo es requerido"],
    trim: true,
  },
  slug: {
    type: String,
    required: [true, "El titulo es requerido"],
    trim: true,
  },
  status: {
    type: Boolean,
    required: false,
    default: true,
  },
  link: {
    type: String,
    required: false,
    trim: true,
  },
  resumen: {
    type: String,
    required: [true, "El resumen es requerido"],
  },
});

module.exports = mongoose.model("Classes", ClassesSchema);
