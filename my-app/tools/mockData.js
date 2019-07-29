const userDetails = [
  {
    id: 1,
    name: "Carolien van der Molen",
    slug: "Carolien van der Molen",
    genderID: 2,
    avatarURL: "https://media.giphy.com/media/wIkGlPFEjzy8qykkUJ/giphy.gif"
  },
  {
    id: 2,
    name: "Miguel Melo Nunes",
    slug: "Miguel Melo Nunes",
    genderID: 1,
    avatarURL: "https://media.giphy.com/media/2w4M7YOoLyLmbiRPPg/giphy.gif"
  },
  {
    id: 3,
    name: "Klemetti Huttunen",
    slug: "Klemetti Huttunen",
    genderID: 1,
    avatarURL: "https://media.giphy.com/media/SHGimpWrWC6k0/giphy.gif"
  },
  {
    id: 4,
    name: "Alix Cordonnier",
    slug: "Alix Cordonnier",
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
