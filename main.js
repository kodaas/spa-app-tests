const express = require("express");
const path = require("path");
const mustache = require("mustache-express");

const app = express();
const PORT = process.env.PORT || 5200;

app.use('/static', express.static(path.resolve(__dirname, "src", "static")))

app.engine("html", mustache());
app.set("view engine","html");
app.set('views', path.resolve(__dirname, "src"))

app.get('/*',(_,res) => {
    res.render("index.html", {name: 'Test'})
});

app.listen(PORT, () => console.log(`Server Running on http://localhost:${PORT}/ 🚀`))