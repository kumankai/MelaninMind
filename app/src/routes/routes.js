import express from 'express';
import auth from '../controllers/authController.js';

const routes = express.Router();

routes.post("/login", auth.login);
routes.post("/signup", auth.signup);
routes.post("/logout", auth.logout);

export default routes;