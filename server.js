const express = require("express");
const xmlparser = require("express-xml-bodyparser");

const app = express();

app.use(express.json());

app.use(xmlparser());

app.post("/access-token", async (req, res) => {
    console.log("Received body:", req.body);
    return res.send("OK");
});

app.post("/user", async (req, res) => {
    console.log("Received body:", req.body);
    return res.send("OK");
});

app.post("/companies", async (req, res) => {
    console.log("Received body:", req.body);
    return res.send("OK");
});

app.listen(3000, () => console.log("Running on http://localhost:3000"));
