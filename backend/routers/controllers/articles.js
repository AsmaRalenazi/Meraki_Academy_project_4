const articles = require("../../db/models/articles");

const createNewArticles = (req, res) => {
  const { title, description, img } = req.body;
  const newArticles = new articles({
    title,
    description,
    img,
  });
  newArticles
    .save()
    .then((result) => {
      res.status(201);
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getAllArticles = (req, res) => {
  articles
    .find({})

    .then((resulte) => {
      res.json(resulte);
    })
    .catch((err) => {
      res.json(err);
    });
};

const getArticlesById = (req, res) => {
  const id = req.params.id;
  articles
    .findOne({ _id: id })

    .then((resulte) => {
      res.json(resulte);
    })
    .catch((err) => {
      res.json(err);
    });
};


const updateArticlesById = (req,res) =>{
  const _id = req.params.id;
  const { title, description, img } = req.body;
  articles
  .findOneAndUpdate(
    { _id },
    { title, description, img },
    { new: true }
  )
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    res.send(err);
  });

}

const deleteArticleById = (req,res)=> {
  const _id = req.params.id;
  articles
  .findByIdAndRemove({_id})
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    res.send(err);
  });

}


module.exports = {
  createNewArticles,
  getAllArticles,
  getArticlesById,
  updateArticlesById,
  deleteArticleById
};
