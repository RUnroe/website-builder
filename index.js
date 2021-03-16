const express = require("express");
const path = require("path");
const routes = require("./routes/routes");



const app = express();

app.set("view engine", "pug");
app.set("views", __dirname+"/views");
app.use(express.static(path.join(__dirname+"/public")));



app.get("/", routes.index);
app.get("/edit", routes.edit);

app.listen(3000);
