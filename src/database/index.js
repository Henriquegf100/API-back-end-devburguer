import mongoose from 'mongoose';
import { Sequelize } from 'sequelize';

import configDatabase from '../config/database.cjs';

import User from '../app/models/User.js';

import Product from '../app/models/Product.js';

import Category from '../app/models/Category.js';

const models = [User, Product, Category];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(configDatabase);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      );
  }

  mongo() {
    this.mongoConnection = mongoose
      .connect('mongodb://localhost:27017/devburger', {
        serverSelectionTimeoutMS: 10000,
      })
      .then(() => console.log('Connected to MongoDB!'))
      .catch((err) => console.error('Error connecting to MongoDB:', err));
  }
}

export default new Database();
