import Joi from 'joi';

const blogCreationSchema = Joi.object({
  title: Joi.string().min(3).required(),
  content: Joi.string().min(10).required(),
});
const queriesSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  message: Joi.string().min(4).required(),
});
const userCreationSchema = Joi.object({
  username: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(4).max(8),
});

export { blogCreationSchema, queriesSchema, userCreationSchema };
