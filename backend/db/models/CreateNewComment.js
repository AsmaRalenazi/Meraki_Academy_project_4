const express = require("express");
const app = express();
const db = require("./db");
const comment = require("./comment");
const port = 5000;
app.use(express.json());

//Create New Comment -Asma
app.post("/articles/:id/comments", (req, res) => {
  let { comment, commenter } = req.body;
  const comment1 = new comment({
    comment,
    commenter,
  });
  comment1
    .save()
    .then((result) => {
      res.json(result);
      status(201);
    })
    .catch((err) => {
      res.send(err);
    });
});

//update comment
app.put("/article/:id/comments/:id", (req, res) => {
  let { comment, commenter } = req.body;
  const comment1 = new comment({
    comment,
    commenter,
  });
  comment1
    .save()
    .then(async (result) => {
      await articles.findOneAndUpdate(
        { _id: id },
        { $push: { comments: result._id } }
      );
      res.json(result);
      status(201);
    })
    .catch((err) => {
      res.send(err);
    });
});

//Delete comment
app.delete("/article/:id/comments/:id", (req, res) => {
  const { comment, commenter } = req.body;
  comment1
    .deleteOne({ comment, commenter })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
