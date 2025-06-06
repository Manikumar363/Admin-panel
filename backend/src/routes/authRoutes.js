const express = require('express');
const { register, login, getProfile } = require('../controllers/authController');
const { protect } = require('../middleware/auth');

const router = express.Router();


router.post('/login', login);
router.get('/profile', protect, getProfile);

module.exports = router; 
