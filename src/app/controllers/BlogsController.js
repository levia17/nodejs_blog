class Blogs{
    // [GET] /
    index(req, res){
        res.send('Reading blogs here!');
    }


}

module.exports = new Blogs;