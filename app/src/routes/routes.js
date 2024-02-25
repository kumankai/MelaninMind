import express from 'express';
import auth from '../controllers/authController.js';

const routes = express.Router();

routes.post("/api/login", auth.login);
routes.post("/api/signup", auth.signup);
routes.post("/api/logout", auth.logout);
routes.get("/api/test", (req, res) => {
    res.status(200).json({ message: "Woohoo"});
});

export default routes;