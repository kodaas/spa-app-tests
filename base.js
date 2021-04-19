const express = require("express");
const path = require("path");
const morgan = require("morgan");
const ejs = require("ejs");

const app = express();
const PORT = process.env.PORT || 4200;

app.use(express.static(path.resolve(__dirname, "src")));
ejs.delimiter = "?";
app.set("view engine", "html");
app.engine("html", ejs.renderFile);
app.set("views", path.resolve(__dirname, "src"));
app.use(morgan("dev"));

app.get("/*", (req, res) => {
  let urlpath = req.url;
  res.render("views/home/index.html", { title: "title", path: urlpath });
});

app.listen(PORT, () => console.log(`Server Runinning on Port ${PORT}`));
