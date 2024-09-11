import { Router } from "express";
const router = Router();
import passport from "passport";
import UsersController from '../controllers/users.controller.js';

router.post('/register',UsersController.register);
router.post('/login',UsersController.login);
router.post('/logout',UsersController.logout);
router.get('/current', passport.authenticate('jwt', { session: false }), UsersController.current);

export default router;
