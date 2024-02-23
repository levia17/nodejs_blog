const newsRouter = require("./news");
const siteRouter = require("./site");
const blogsRouter = require("./blogs");

function routes(app) {
  
  app.get("/blogs", blogsRouter);
  app.get("/news", newsRouter);
  app.get("/", siteRouter);


}

module.exports = routes;
