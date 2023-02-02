import Joi from 'joi';

const blogCreationSchema = Joi.object({
  title: Joi.string().alphanum().min(3).required(),
  content: Joi.string().min(10).required(),
  image: Joi.string().required(),
});
const queriesSchema = Joi.object({
  name: Joi.string().alphanum().min(3).required(),
  email: Joi.string().email().required(),
  message: Joi.string().min(4).required(),
});

export { blogCreationSchema, queriesSchema };
