import Express  from "express";
import router from "./routes/routes.js";
import dotenv from 'dotenv';
dotenv.config();

const app = Express();
const port = 5000;
app.use(router);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});