const db = require("../db/queries");

// GET / - Log available usernames
exports.getUsernames = async (req, res) => {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
};

// GET /new - Display the form
exports.newUserForm = async (req, res) => {
  res.render("newUserForm");
};

exports.saveUser = async (req, res) => {
  const { username } = req.body; // This should correctly retrieve the username
  try {
    await db.insertUsername(username); // Call the insert function
    res.redirect("/"); // Redirect after successful insertion
  } catch (error) {
    console.error("Error saving username: ", error); // Log the error
    res.status(500).send("Error saving username."); // Send an error response
  }
};
