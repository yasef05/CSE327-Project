import mongoose from "mongoose";
import validator from "validator";

const MESSAGE_SCHEMA = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "first name must have 3 characters"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must have 3 characters"],
  },
  email: {
    type: String,
    required: true,
    validator: [validator.isEmail, "Please provide a valid email!"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [11, "Phone number must have 11 digits"],
    maxLength: [11, "Phone number must have 11 digits"],
  },
  message: {
    type: String,
    required: true,
    minLength: [10, "message must have 10 characters"],
  },
});
'

export const Message = mongoose.model("Message", messageSchema);