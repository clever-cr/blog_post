const Blog = require("../models/blog");

const create_blog = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
const all_blogs = (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

const single_blog = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

const delete_blog = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = {
  all_blogs,
  create_blog,
  single_blog,
  delete_blog,
};
