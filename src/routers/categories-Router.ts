import { Router } from 'express';
import { allCategories } from '@/controllers/categories-controller';

const categoriesRouter = Router();

categoriesRouter.get('/', allCategories);

export { categoriesRouter };
