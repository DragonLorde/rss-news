import express from "express";
import cors from 'cors';
import 'dotenv/config';
import router from "./router/index.js";


const port = process.env.PORT;
const app = express();
app.use(cors());
app.use('/api', router);

app.listen(port, () => {
    console.log(`server start port : ${port}`);
});


