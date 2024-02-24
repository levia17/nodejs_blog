class Blogs{
    // [GET] /
    index(req, res){
        res.render('blogs');
    }


}

module.exports = new Blogs;