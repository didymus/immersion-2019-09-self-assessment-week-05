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

User.get('/api/users', (req, res) => {
// - [] Get all the users from the database __using the`User` model__
// - [] Respond with a`200` status code and an array of the users in the body
// - [] If the query to the database fails, you should log the error and send back a`500` status code
});

User.post('/api/users', (req, res) => {
  // -[] Accept a JSON body that includes a`"username"` property:
  // ```json
  //   {
  //     "username": "Alice"
  //   }
  //   ```
  // -[] Create a new user in the database __using the`User` model__
  // - [] Respond with a`201` status code and an object representing the user in the body
  // - [] If the query to the database fails, you should log the error and send back a`500` status code
});

User.get('/api/users/:id', (req, res) => {
  // - [] On a`GET /api/users/:id` you server should:
  // - [] Get the user in the database with the`id` __using the`User` model__
  // - [] Respond with a`200` status code and an object representing the user in the body
  // - [] If a user with the`id` does not exist, you should send back a`404` status code
  // - [] If the query to the database fails, you should log the error and send back a`500` status code

});

User.put('/api/users/:id', (req, res) => {
  // -[] Accept a JSON body that includes a`"username"` property:
  // ```json
  //   {
  //     "username": "Bob"
  //   }
  //   ```
  // - [] Update the user in the database with the`id` __using the`User` model__
  // - [] Respond with a`200` status code
  // - [] If a user with the`id` does not exist, you should send back a`404` status code
  // - [] If the query to the database fails, you should log the error and send back a`500` status code
});
