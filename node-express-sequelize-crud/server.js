const express = require('express');
const Sequelize = require('sequelize');

const DB_NAME = 'test';
const DB_USER = 'test';
const DB_PASS = '';
const DB_PATH = './db.test.sqlite';

const app = express();
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  dialect: 'sqlite',
  storage: DB_PATH,
});

const User = sequelize.define('User', {
  username: Sequelize.STRING,
});

app.use(express.json());


module.exports = {
  app,
  User,
};
