const userDetails = [
  {
    id: 1,
    name: "Liam Ash",
    slug: "liamash3@gmail.com",
    emailAddress: "liamash3@gmail.com",
    genderID: 1,
    avatarURL: "https://media.giphy.com/media/SGGHAPCjED1OcW6ixv/giphy.gif"
  },
  {
    id: 2,
    name: "Carolien van der Molen",
    slug: "caroline123@gmail.com",
    emailAddress: "caroline123@gmail.com",
    genderID: 2,
    avatarURL: "https://media.giphy.com/media/wIkGlPFEjzy8qykkUJ/giphy.gif"
  },
  {
    id: 3,
    name: "Alix Cordonnier",
    slug: "alex12@gmail.com",
    emailAddress: "alex12@gmail.com",
    genderID: 2,
    avatarURL: ""
  }
];

const genders = [
  { id: 1, name: "Male" },
  { id: 2, name: "Female" },
  { id: 3, name: "Other" }
];

const newUserDetails = {
  id: null,
  name: "",
  slug: "",
  emailAddress: "",
  genderID: null,
  avatarURL: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newUserDetails: newUserDetails,
  userDetails: userDetails,
  userGenders: genders
};
