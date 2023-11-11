import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello, this is the root of the application!");
});

app.get("/api/v1/users", (req, res) => {
    const users = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Doe" },
    ];

    return res.status(200).json({ users });
});

app.listen(5000, () => {
    console.log("App listening on port 5000!");
});
