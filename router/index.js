import { getAllNews, getTopDay, getTopSeven } from "./routes.js";
import { Router } from "express";
import { topSeven, all, topDay } from "../API/apiURL.js";
import News from "../controller/newsController.js";


const router = new Router();
router.get('/all' , async (req, res) => {
    const allNews = new News(all);
    const result = await allNews.getData();
    res.status(200).json(result);
})
router.get('/seven', async (req, res) => {
    const allNews = new News(topSeven);
    const result = await allNews.getData();
    res.status(200).json(result);
})
router.get('/day', async (req, res) => {
    const allNews = new News(topDay);
    const result = await allNews.getData();
    res.status(200).json(result);
})



export default router;