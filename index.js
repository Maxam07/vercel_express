import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://sfl.world/api/v1/prices");
        const finalRes = result.data.data.p2p;
        console.log(finalRes)
        res.send(finalRes["Sunflower"])
    } catch (error) {
        const message = "Failed to make request";
        console.error(message);
        res.send(message);
    }
})

app.listen(port, () => {
    console.log(`Server listening to ${port}.`)
})