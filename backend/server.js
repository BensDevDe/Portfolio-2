const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");

const PORT = process.env.PORT || 3005;

dotenv.config();
const app = express();

app.use(express.json());

mongoose.connect(process.env.URI_KEY)
.then(() => {
    console.log(`Database connected`.underline);
  })
  .catch((err) => {
    console.log(err);
  });


  app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.use("/projectsRoutes", require("./routes/ProjectsRoutes"));

app.listen(PORT, () =>
  console.log(`server up on port ${PORT} aka Hasi😘`.underline.yellow.bold)
);
