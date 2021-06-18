const express = require("express");
const hbs = require("express-handlebars");
const path = require("path");
const getWeather = require("./lib/getWeather");
const app = express(); 

const indexRouter = require("./routes/indexRouter");
const weatherRouter = require("./routes/weatherRouter");
const errRouter = require("./routes/errRouter");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.engine("hbs", hbs({
    extname: ".hbs",
}));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", ".hbs");

app.use("/", indexRouter);
app.use("/weather", weatherRouter);
app.use("*", errRouter);

app.listen(process.env.port || 5000, () => {
    console.log("App is online")
});