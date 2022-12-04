const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const results = await Category.findAll({
    include: [{
      model: Product,
    }]
  });

  res.send(JSON.stringify(results));
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const id = req.params.id;
  const results = await Category.findOne({
    include: [{
      model: Product,
    }],
    where: {
      id: id
    }
  });

  res.send(JSON.stringify(results));
});

router.post('/', (req, res) => {
  // create a new category
  const name = req.body.category_name;

  const tag = await category.create({
    category_name: name
  });

  res.send(JSON.stringify(tag));
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  const name = req.body.category_name;
  const id = req.params.id;

  const result = await Category.update({
    catetory_name: name
  }, {
    where: {
      id: id
    }
  });

  res.send(JSON.stringify({
    effectedRows: result[0]
  }));


router.delete('/:id', (req, res) => {
  const id = req.params.id;
  // delete a category by its `id` valueconst tagDeleted = await Tag.destroy({
    const categoryDeleted = await Category.destroy({  
  where: {
      id: id
    }
  });

  res.send(JSON.stringify({
    deleted: categoryDeleted
  }));
});


module.exports = router;
