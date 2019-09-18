const { app, User } = require('./server');
const PORT = process.env.PORT || 8080;

User.sync({ force: true })
  .then(() => {
    console.log('Users table created');
    return User.create({ username: 'zlester' });
  })
  .then(() => {
    console.log('Seeded User table');
    app.listen(PORT, () => {
      console.log(`node-express-sequelize listening on ${PORT}`);
    });
  });
