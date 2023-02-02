import express from 'express';
import mongoose from 'mongoose';
import BlogRoutes from './routes/blog.routes.js';
import queryRouter from './routes/queries.routes.js';
import bodyParser from 'body-parser';

const app = express();
app.use(
  bodyParser.json({
    limit: '50mb',
  }),
);
app.use(express.urlencoded({ extended: false }));
app.use('/api', queryRouter);
app.use('/api', BlogRoutes);
app.listen(5000, () => {
  console.log('Server has started!');
});

mongoose.set('strictQuery', false);
mongoose
  .connect('mongodb://localhost:27017/learning-express', {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('DB Connected');
  })
  .catch((error) => {
    console.log(error);
  });
