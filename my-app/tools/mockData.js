const userDetails = [
  {
    id: 1,
    name: "Rosemary-Gallows",
    slug: "Rosemary-Gallows",
    genderID: 2,
    avatarURL: "https://media.giphy.com/media/wIkGlPFEjzy8qykkUJ/giphy.gif"
  },
  {
    id: 2,
    name: "Fionne MacDough",
    slug: "Fionne-MacDough",
    genderID: 1,
    avatarURL: "https://media.giphy.com/media/2w4M7YOoLyLmbiRPPg/giphy.gif"
  },
  {
    id: 3,
    name: "Jeanne D'Orleans",
    slug: "Jeanne-D'Orleans",
    genderID: 1,
    avatarURL: "https://media.giphy.com/media/SHGimpWrWC6k0/giphy.gif"
  },
  {
    id: 4,
    name: "Michaela Melicharová",
    slug: "Michaela-Melicharová",
    genderID: 2,
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
