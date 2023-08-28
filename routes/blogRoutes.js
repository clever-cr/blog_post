const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");
const blogControllers = require("../controllers/blogControllers");

router.post("/blogs", blogControllers.create_blog);
router.get("/all-blogs", blogControllers.all_blogs);
router.get("/blogs/:id", blogControllers.single_blog);
router.delete("/blogs/:id", blogControllers.delete_blog);

module.exports = router;
