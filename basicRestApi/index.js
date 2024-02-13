const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(logger);

// mimic the db using array
let blogList = [];
function logger(req, res, next) {
  console.log(req.url)
  console.log(req.body);
  next();
}
function isAuthenticated(req, res, next) {
  console.log("yes user is authenticated");
  next()
}


app.get("/blogs",isAuthenticated, (req, res) => {
  return res.status(200).json({
    data: blogList,
    success:true,
  });
});
app.post("/blogs", (req, res) => {
  blogList.push({
    title: req.body.title,
    content: req.body.content,
    id: Math.floor(Math.random() * 1000),
  });
  return res.status(201).send("blog created");
});
app.get("/blogs/:id", (req, res) => {
  let blog = blogList.find((blog) => blog.id == req.params.id);
  res.status(200).send(blog);
});

app.listen(PORT, () => {
  console.log("server started to ", PORT);
});
