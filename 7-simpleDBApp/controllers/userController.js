const db = require("../db/queries");
const { getAllUsernames } = require("../db/queries");

exports.getUsernames = async (req, res) => {
  const search = req.query.search || "";
  const usernames = await getAllUsernames(search);
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
};

exports.newUserForm = async (req, res) => {
  res.render("newUserForm");
};

exports.saveUser = async (req, res) => {
  const { username } = req.body;
  try {
    await db.insertUsername(username);
    res.redirect("/");
  } catch (error) {
    console.error("Error saving username: ", error);
    res.status(500).send("Error saving username.");
  }
};

exports.deleteUsernames = async (req, res) => {
  try {
    await db.deleteAllUsernames();
    res.send("All usernames have been deleted");
  } catch (error) {
    console.log("Error deleting usernames", error);
    res.status(500).send("Error deleting usernames.");
  }
};
