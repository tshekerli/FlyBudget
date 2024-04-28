import Express  from "express";
import router from "./routes/routes.js";
import dotenv from 'dotenv';
import cors from "cors"
dotenv.config();

const app = Express();
const port = 20;
app.use(router);
app.use(cors)

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});