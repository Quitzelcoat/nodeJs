const asyncHandler = require("express-async-handler");

const getUserById = asyncHandler(async (req, res) => {
  const userId = req.params.id;

  const user = await someDBQueryToGetUser(userId);

  if (!user) {
    throw new CustomNotFoundError("User not found");
  }

  res.send(`User found: ${user.name}`);
});

const getUsers = asyncHandler(async (req, res) => {
  const users = await someDBQueryToGetAllUsers();

  if (!users || users.length === 0) {
    throw new CustomNotFoundError("No users found");
  }

  res.json(users);
});

const createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const newUser = await someDBQueryToCreateUser({ name, email, password });

  if (!newUser) {
    throw new Error("User could not be created");
  }

  res.status(201).json(newUser);
});

module.exports = { getUserById, getUsers, createUser };
