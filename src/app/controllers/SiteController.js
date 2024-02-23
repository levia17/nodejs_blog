const Blog = require("../models/blogs");

const {
  multipleMongooseToObject,
  singleMongooseToObject,
} = require("../../ulti/mongoose");

class SiteController {
  // [GET] /
  async index(req, res, next) {
    Blog.find({})
      .then((blog) => {
        res.render("home", {
          blog: multipleMongooseToObject(blog),
        });
      })
      .catch(next);
  }

  // [GET] /news
  news(req, res) {
    res.render("news");
  }

  blogs(req, res){
    res.render('blogs');
  }
}

module.exports = new SiteController();
