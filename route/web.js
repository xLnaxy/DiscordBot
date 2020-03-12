const Discord = require("discord.js");
const express = require("express");
const cpu = require("cpu-stat");
const client = new Discord.Client();
const app = express();
const moment = require("moment");
const path = require("path");
require("moment-duration-format");

const config = require("../config.json");
client.config = config;

const renderTemplate = (res, req, template, data = {}) => {
  const baseData = {
    bot: new client(),
    path: req.path
  };
};
app.use("/", express.static(path.resolve(`${process.cwd()}${path.sep}`)));
cpu.usagePercent(function(err, percent, seconds) {
  app.engine("html", require("ejs").renderFile);
  app.set("view engine", "html");
  app.get("/", (req, res) => {
    res.render("index.ejs", { bot: client, path: req.path });
  });
});

const listener = app.listen(process.env.PORT, function() {
  //console.log('Your app is listening on port ' + listener.address().port);
});

client.login(config.token);
