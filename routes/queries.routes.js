import { Router } from 'express';
import {
  getAllQueries,
  sendQuery,
  updateSeenToTrue,
} from '../controllers/query.controller.js';
import {
  isAdmin,
  isLoggedIn,
} from '../middleware/authentication/auth.middleware.js';
import { queriesSchema } from '../middleware/validation/validation.js';
import validate from '../middleware/validation/validation.middleware.js';
const queryRouter = Router();

queryRouter.get('/queries', [isLoggedIn, isAdmin], getAllQueries);
queryRouter.post('/queries', validate(queriesSchema), sendQuery);
queryRouter.patch('/queries/:id', [isLoggedIn, isAdmin], updateSeenToTrue);

export default queryRouter;
