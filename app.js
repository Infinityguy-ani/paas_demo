const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/submit", (req, res) => {
    const { name, feedback } = req.body;

    res.send(`
        <h2>Thank you, ${name}!</h2>
        <p>Your feedback: "${feedback}"</p>
        <a href="/">Go Back</a>
    `);
});

app.listen(3000, () => console.log("Server running"));