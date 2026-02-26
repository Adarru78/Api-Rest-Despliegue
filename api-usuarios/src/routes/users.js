const express = require('express');
const router = express.Router();
const User = require('../models/User');


// Crear usuario
router.post('/', async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// Listar todos
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});


// Obtener por ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'No encontrado' });
    res.json(user);
  } catch {
    res.status(400).json({ message: 'ID inválido' });
  }
});


// Actualiza usuario
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedUser);
  } catch {
    res.status(400).json({ message: 'Error al actualizar' });
  }
});


// Eliminar usuario
router.delete('/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'Usuario eliminado' });
  } catch {
    res.status(400).json({ message: 'Error al eliminar' });
  }
});

module.exports = router;