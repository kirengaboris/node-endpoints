import queryModel from '../models/Queries.model.js';

const getAllQueries = async (req, res) => {
  const queries = await queryModel.find();
  res.send(queries);
};

const sendQuery = async (req, res) => {
  const query = new queryModel({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });
  await query.save();
  res.send(query);
};

const updateSeenToTrue = async (req, res) => {
  try {
    const message = await queryModel.findById(req.params.id);

    // update the seen value
    message.seen = true;

    // save the updated document
    await message.save();

    res.status(201).json({
      statusCode: 201,
      success: true,
      data: [{ message: 'Done', body: message }],
    });
  } catch (error) {
    res.status(400).json({ status: 400, success: false, message: error });
  }
};

export { getAllQueries, sendQuery, updateSeenToTrue };
