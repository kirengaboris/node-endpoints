import express from 'express';
import mongoose from 'mongoose';
import BlogRoutes from './routes/blog.routes.js';
import queryRouter from './routes/queries.routes.js';
import bodyParser from 'body-parser';
import authenticationRoutes from './routes/auth.routes.js';
const PORT = process.env.PORT || 3000;

const app = express();
app.use(
  bodyParser.json({
    limit: '50mb',
  }),
);
app.use(express.urlencoded({ extended: false }));
app.use('/api', queryRouter);
app.use('/api', BlogRoutes);
app.use('/api', authenticationRoutes);
app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    success: true,
    message: 'Welcome',
  });
});
app.listen(`${PORT}`, () => {
  console.log(`Server has started on http://localhost:${PORT} `);
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
