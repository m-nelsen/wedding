import mongoose from "mongoose";

const RegistrantSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please provide your first name."],
    maxlength: [80, "Name cannot be more than 80 characters."],
  },
  lastName: {
    type: String,
    required: [true, "Please provide your last name."],
    maxlength: [80, "Name cannot be more than 80 characters."],
  },
});

export default mongoose.models.Registrant ||
  mongoose.model("Registrant", RegistrantSchema);
