import express from 'express';
import dotenv from 'dotenv';
import routes from './src/routes/routes.js';
import mongoose from 'mongoose';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(routes);

mongoose.connect(process.env.MDB_URL)
.then((res) => {
    console.log(`API listening on port ${PORT}`);
    app.listen(PORT);
})
.catch((err) => {
    console.log(err);
});