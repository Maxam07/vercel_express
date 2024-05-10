import express from "express";
import axios from "axios";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://sfl.world/api/v1/prices");
        const finalRes = result.data.data.p2p;
        console.log(finalRes)
        res.render("index.ejs", {finalRes: finalRes})
    } catch (error) {
        const message = "Failed to make request";
        console.error(message);
        res.send(message);
    }
})

app.listen(port, () => {
    console.log(`Server listening to ${port}.`)
})