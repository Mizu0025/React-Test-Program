const userDetails = [
  {
    id: 1,
    name: "Rosemary Gallows",
    slug: "english",
    gender: 2,
    avatarURL: ""
  },
  {
    id: 2,
    title: "Fionne MacDough",
    slug: "irish",
    gender: 1,
    avatarURL: ""
  },
  {
    id: 3,
    title: "Jeanne D'Orleans",
    slug: "french",
    gender: 1,
    avatarURL: ""
  }
];

const genders = [{ id: 1, name: "Male" }, { id: 2, name: "Female" }];

const newUserDetails = {
  id: null,
  name: "",
  gender: null,
  avatarURL: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newUser: newUserDetails,
  userDetails: userDetails,
  userGenders: genders
};
