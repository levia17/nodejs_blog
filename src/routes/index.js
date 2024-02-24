const newsRouter = require("./news");
const siteRouter = require("./site");
const blogsRouter = require("./blogs");

function routes(app) {
  
  app.use("/blogs", blogsRouter);
  app.use("/news", newsRouter);
  app.use("/", siteRouter);


}

module.exports = routes;
