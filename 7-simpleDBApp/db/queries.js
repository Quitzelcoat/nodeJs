const pool = require("./pool");

async function getAllUsernames(search) {
  if (search) {
    const { rows } = await pool.query(
      "SELECT * FROM usernames WHERE username ILIKE $1",
      [`%${search}%`]
    );
    return rows;
  } else {
    const { rows } = await pool.query("SELECT * FROM usernames");
    return rows;
  }
}

async function insertUsername(username) {
  try {
    await pool.query(
      "INSERT INTO usernames (username) VALUES ('" + username + "')"
    );
  } catch (error) {
    console.error("Failed to insert username:", error);
    throw error;
  }
}

async function deleteAllUsernames() {
  try {
    await pool.query("DELETE FROM usernames");
  } catch (error) {
    console.log("Failed to delete usernames:", error);
    throw error;
  }
}

module.exports = {
  getAllUsernames,
  insertUsername,
  deleteAllUsernames,
};
