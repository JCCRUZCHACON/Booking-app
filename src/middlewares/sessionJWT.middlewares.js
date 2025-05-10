const jwt = require('jsonwebtoken');

const sessionJWT = (req, res, next) => {
  try {
    const user = req.userlogged;
    if (!user) {
      return res.status(401).json({ message: 'Usuario no autenticado' });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email }, // Evita pasar todo el user completo
      process.env.TOKEN_SECRET,
      { expiresIn: process.env.TOKEN_EXPIRES_IN || '1d' }
    );

    req.token = token;
    next();
  } catch (error) {
    console.error('Error generando JWT:', error);
    res.status(500).json({ message: 'Error en autenticación' });
  }
};

module.exports = sessionJWT;
