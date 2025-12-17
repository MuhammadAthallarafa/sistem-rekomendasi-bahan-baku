const express = require('express');
const expressLayouts = require('express-ejs-layouts');

// Database (Sequelize)
const sequelize = require('./config/database');

// Sequelize Models
const MaterialModel = require('./models/materialModel');
const Category = require('./models/categoryModel');

// OOP Classes & Algorithm Service
const { Material, RecommendedMaterial } = require('./models/material');
const ScoringService = require('./models/scoringService');

const app = express();

/* ===== Middleware & View Engine ===== */
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layout');

/* ===== Routes ===== */

// Home
app.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

// Form input
app.get('/form', (req, res) => {
  res.render('form', { title: 'Form Input' });
});

// Submit material & calculate score
app.post('/submit-material', async (req, res) => {
  const { name, price, quality, stock } = req.body;

  // OOP object
  const material = new Material(
    name,
    Number(price),
    Number(quality),
    Number(stock)
  );

  // Weighted score calculation
  const score = ScoringService.calculate(material);

  // Default category
  const category = await Category.findOne({
    where: { name: 'Bahan Baku Umum' }
  });

  // Save to database
  await MaterialModel.create({
    name,
    price,
    quality,
    stock,
    score,
    CategoryId: category.id
  });

  // Result object (inheritance)
  const recommendedMaterial = new RecommendedMaterial(
    material.name,
    material.price,
    material.quality,
    material.stock,
    score
  );

  res.render('result', {
    title: 'Hasil Rekomendasi',
    material: recommendedMaterial
  });
});

// Read data
app.get('/materials', async (req, res) => {
  const materials = await MaterialModel.findAll();

  res.render('list', {
    title: 'Daftar Bahan Baku',
    materials
  });
});

// Delete data
app.post('/materials/delete/:id', async (req, res) => {
  await MaterialModel.destroy({
    where: { id: req.params.id }
  });

  res.redirect('/materials');
});

// Edit form
app.get('/materials/edit/:id', async (req, res) => {
  const material = await MaterialModel.findByPk(req.params.id);

  res.render('edit', {
    title: 'Edit Bahan Baku',
    material
  });
});

// Update data & recalculate score
app.post('/materials/update/:id', async (req, res) => {
  const { name, price, quality, stock } = req.body;

  const material = new Material(
    name,
    Number(price),
    Number(quality),
    Number(stock)
  );

  const score = ScoringService.calculate(material);

  await MaterialModel.update(
    {
      name: material.name,
      price: material.price,
      quality: material.quality,
      stock: material.stock,
      score
    },
    {
      where: { id: req.params.id }
    }
  );

  res.redirect('/materials');
});

/* ===== Database Initialization ===== */
sequelize.sync().then(async () => {
  await Category.findOrCreate({
    where: { name: 'Bahan Baku Umum' }
  });

  console.log('Database siap');
});

/* ===== Server ===== */
app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});
