const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  try {
    await pool.query(
      "INSERT INTO usernames (username) VALUES ('" + username + "')"
    );
  } catch (error) {
    console.error("Failed to insert username:", error);
    throw error; // Rethrow the error after logging it
  }
}

module.exports = {
  getAllUsernames,
  insertUsername,
};
