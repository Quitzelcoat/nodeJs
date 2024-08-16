// controllers/usersController.js
const { body, validationResult } = require("express-validator");
const usersStorage = require("../storages/usersStorage");

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";
const emailErr = "must be a valid email address.";
const ageErr = "must be a number between 18 and 120.";
const bioErr = "must not exceed 200 characters.";

const validateUser = [
  body("firstName")
    .trim()
    .isAlpha()
    .withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`First name ${lengthErr}`),
  body("lastName")
    .trim()
    .isAlpha()
    .withMessage(`Last name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`Last name ${lengthErr}`),
  body("email").trim().isEmail().withMessage(emailErr),
  body("age").optional().isInt({ min: 18, max: 120 }).withMessage(ageErr),
  body("bio").optional().isLength({ max: 200 }).withMessage(bioErr),
];

exports.usersListGet = (req, res) => {
  res.render("index", {
    title: "User list",
    users: usersStorage.getUsers(),
  });
};

exports.usersCreateGet = (req, res) => {
  res.render("createUser", {
    title: "Create user",
  });
};

exports.usersCreatePost = [
  validateUser,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("createUser", {
        title: "Create user",
        errors: errors.array(),
      });
    }
    const { firstName, lastName, email, age, bio } = req.body;
    usersStorage.addUser({ firstName, lastName, email, age, bio });
    res.redirect("/");
  },
];

exports.usersUpdateGet = (req, res) => {
  const user = usersStorage.getUser(req.params.id);
  res.render("updateUser", {
    title: "Update user",
    user: user,
  });
};

exports.usersUpdatePost = [
  validateUser,
  (req, res) => {
    const user = usersStorage.getUser(req.params.id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("updateUser", {
        title: "Update user",
        user: user,
        errors: errors.array(),
      });
    }
    const { firstName, lastName, email, age, bio } = req.body;
    usersStorage.updateUser(req.params.id, {
      firstName,
      lastName,
      email,
      age,
      bio,
    });
    res.redirect("/");
  },
];

exports.usersDeletePost = (req, res) => {
  usersStorage.deleteUser(req.params.id);
  res.redirect("/");
};

exports.usersSearchPost = (req, res) => {
  const { searchName, searchEmail } = req.body;
  const users = usersStorage.getUsers();

  // Filter users by name or email
  const results = users.filter((user) => {
    const matchesName = searchName
      ? `${user.firstName} ${user.lastName}`
          .toLowerCase()
          .includes(searchName.toLowerCase())
      : true;
    const matchesEmail = searchEmail
      ? user.email.toLowerCase() === searchEmail.toLowerCase()
      : true;
    return matchesName && matchesEmail;
  });

  res.render("search", {
    title: "Search Results",
    results: results,
    searchName,
    searchEmail,
  });
};

exports.usersSearchGet = (req, res) => {
  res.render("search", {
    title: "Search Results",
    results: [],
  });
};
