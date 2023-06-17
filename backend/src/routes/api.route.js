import { Router } from 'express';
import { authController } from '../controllers/index';
import { registrationValidator, loginValidator } from '../middleware/index';
import { routesConstants } from '../constants/index';

//## Initialize express router;
export const apiRoute = Router();

//## register endpoint
apiRoute.post(
    routesConstants.USERS.CREATE,
    [registrationValidator],
    authController.createUser
);

//Login user endpoint
apiRoute.post(
    routesConstants.USERS.LOGIN,
    [loginValidator],
    authController.loginUser
);
