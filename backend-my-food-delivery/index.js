import express from "express";

const port = 8000;
const app = express();

app.get("/", (req, res) => {
  return res.send("hello").end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
