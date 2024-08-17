const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: `haris`,
  database: "top_users",
  password: `user1234`,
  port: 5432, // The default port
});
