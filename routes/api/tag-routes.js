const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

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

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
