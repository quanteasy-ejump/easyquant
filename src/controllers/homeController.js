// Home controller
exports.getHome = (req, res) => {
  res.json({
    message: 'Welcome to EasyQuant API',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
};

exports.getStatus = (req, res) => {
  res.json({
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
};
