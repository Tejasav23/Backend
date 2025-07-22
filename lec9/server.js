const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});
app.post("/data", (req, res) => {
  const { userName, userEmail, userPass } = req.body;

  fs.writeFile("./file.txt", JSON.stringify(req.body), (err) => {
    if (err) {
      return res.status(500).send("Failed to write");
    }
    res.send({
      message: "POST Request received",
      yourName: userName,
      yourMail: userEmail,
      yourPass: userPass,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server started at https://localhost:${PORT}`);
});