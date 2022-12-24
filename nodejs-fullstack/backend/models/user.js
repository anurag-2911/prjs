const Joi = require("joi");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  userName: { type: String, unique: true },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
});

const validate = (user) => {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    userName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  return schema.validate(user);
};

const User = mongoose.model("user", userSchema);

module.exports = { User, validate };
