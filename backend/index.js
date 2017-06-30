module.exports = (app, callback) => {
  const router = app.get('router')();

  router.get('/', (req, res) => {
    res.send('this is an api');
  });

  return callback(null, router);
};
