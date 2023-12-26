const users = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
  {
    id: 3,
    name: "Jim Doe",
  },
];

const getUserById = (id, callback) => {
  const user = users.find((user) => {
    return user.id === id;
  });

  if (!user) {
    return callback(`User not found with id ${id}`);
  }

  return callback(null, user);
};

module.exports = {
  getUserById,
};
