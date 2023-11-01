const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  try {
    // console.log(app);
    app.use(
      ['/api', '/auth/google', '/stripe'],
      createProxyMiddleware({
        target: 'http://localhost:5000',
      })
    );
  } catch (err) {
    console.log(err.message);
  }
};
