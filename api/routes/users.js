const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const { max } = req.query;
  maxuser = parseInt(max) || 150;
  const user = [];
  for (let i = 0; i < maxuser; i++) {
    user.push({
      id: i,
      user: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      phone: faker.phone.number(),
      address: faker.address.streetAddress()
    });
  }
  res.json(user);
})

router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json(
    {
      id,
      user: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      phone: faker.phone.number(),
      address: faker.address.streetAddress()
    });
})

router.get('/:id/reviews', (req, res) => {
  const { id } = req.params;
  res.json(
    [
      {
        id,
        user: faker.person.fullName(),
        review: 'good'
      }
    ])
  }
)

module.exports = router;
