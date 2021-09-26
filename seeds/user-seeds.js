const { User } = require('../models');

const userData = [
  {
    username: 'iancohen',
    password: 'test1'
    
  },
  {
    username: 'ianc',
    password: 'test2'
  },
  {
    username: 'ian',
    password: 'test3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;