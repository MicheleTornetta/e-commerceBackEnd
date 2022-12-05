const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const results = await Tag.findAll({
    include: [{
      model: Product,
    }]
  });

  res.send(JSON.stringify(results));
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const id = req.params.id;
  const results = await Tag.findOne({
    include: [{
      model: Product,
    }],
    where: {
      id: id
    }
  });
  
  res.send(JSON.stringify(results));
});

// create new tag
router.post('/', async (req, res) => {
  const name = req.body.tag_name;

  const tag = await Tag.create({
    tag_name: name
  });

  res.send(JSON.stringify(tag));
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const name = req.body.tag_name;
  const id = req.params.id;

  const result = await Tag.update({
    tag_name: name
  }, {
    where: {
      id: id
    }
  });

  res.send(JSON.stringify({
    effectedRows: result[0]
  }));
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  // delete on tag by its `id` value
  const tagDeleted = await Tag.destroy({
    where: {
      id: id
    }
  });

  res.send(JSON.stringify({
    deleted: tagDeleted
  }));
});

module.exports = router;

