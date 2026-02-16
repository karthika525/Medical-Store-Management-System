const express = require('express');
const router = express.Router();
const Medicine = require('../models/medicineModel');


const checkAuth = (req, res, next) => {
  if (!req.session.user) return res.redirect('/login');
  next();
};

router.get('/', checkAuth, async (req, res) => {
  const userId = req.session.user._id;
  const { page = 1, search = '', error } = req.query;
  const limit = 4;

  const filter = { userId, name: { $regex: search, $options: 'i' } };
  const total = await Medicine.countDocuments(filter);
  const medicines = await Medicine.find(filter)
    .sort({ addedAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit);

  res.render('medicineList', {
    medicines,
    search,
    error,
    currentPage: +page,
    totalPages: Math.ceil(total / limit),
    user: req.session.user
  });
});

router.get('/add', checkAuth, async (req, res) => {
  const count = await Medicine.countDocuments({ userId: req.session.user._id });
  if (count >= 10)
    return res.redirect('/medicines?error=' + encodeURIComponent('You have reached the limit of 10 medicines! Cannot add more.'));
  res.render('addMedicine');
});

router.post('/add', checkAuth, async (req, res) => {
  const userId = req.session.user._id;
  const count = await Medicine.countDocuments({ userId });
  if (count >= 10)
return res.redirect('/medicines?error=' + encodeURIComponent('You have reached the limit of 10 medicines! Cannot add more.'));

  await new Medicine({ userId, name: req.body.name, stock: req.body.stock }).save();
  res.redirect('/medicines');
});

router.get('/edit/:id', checkAuth, async (req, res) => {
  const medicine = await Medicine.findById(req.params.id);
  res.render('editMedicine', { medicine });
});

router.post('/edit/:id', checkAuth, async (req, res) => {
  await Medicine.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/medicines');
});

router.get('/delete/:id', checkAuth, async (req, res) => {

  await Medicine.findByIdAndDelete(req.params.id);
  res.redirect('/medicines');
});

module.exports = router;
