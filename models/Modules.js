const mongoose = require("mongoose");

const ModuleSchema = mongoose.Schema({
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
  module: {
    type: Boolean,
    required: false,
    default: true,
  },
  order: {
    type: String,
    required: [true, "El orden es requerido"],
    trim: true,
  },
});

module.exports = mongoose.model("Module", ModuleSchema);
