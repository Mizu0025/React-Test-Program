const userDetails = [
  {
    id: 1,
    name: "Liam Ash",
    editName: "Liam Ash",
    slug: "Liam Ash",
    editSlug: "Liam Ash",
    emailAddress: "liamash3@gmail.com",
    editEmailAddress: "liamash3@gmail.com",
    genderID: 1,
    editGenderID: 1,
    avatarURL: "https://media.giphy.com/media/SGGHAPCjED1OcW6ixv/giphy.gif",
    editAvatarURL: "https://media.giphy.com/media/SGGHAPCjED1OcW6ixv/giphy.gif",
    avatarFile: null,
    editAvatarFile: null
  },
  {
    id: 2,
    name: "Carolien van der Molen",
    editName: "Carolien van der Molen",
    slug: "Carolien van der Molen",
    editSlug: "Carolien van der Molen",
    emailAddress: "caroline123@gmail.com",
    editEmailAddress: "caroline123@gmail.com",
    genderID: 2,
    editGenderID: 2,
    avatarURL: "https://media.giphy.com/media/wIkGlPFEjzy8qykkUJ/giphy.gif",
    editAvatarURL: "https://media.giphy.com/media/wIkGlPFEjzy8qykkUJ/giphy.gif",
    avatarFile: null,
    editAvatarFile: null
  },
  {
    id: 3,
    name: "Alix Cordonnier",
    editName: "Alix Cordonnier",
    slug: "Alex Cordonnier",
    editSlug: "Alex Cordonnier",
    emailAddress: "alex12@gmail.com",
    editEmailAddress: "alex12@gmail.com",
    genderID: 2,
    editGenderID: 2,
    avatarURL: "",
    editAvatarURL: "",
    avatarFile: null,
    editAvatarFile: null
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
  editName: "",
  slug: "",
  editSlug: "",
  emailAddress: "",
  editEmailAddress: "",
  genderID: null,
  editGenderID: null,
  avatarURL: "",
  editAvatarURL: "",
  avatarFile: [],
  editAvatarFile: []
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newUserDetails: newUserDetails,
  userDetails: userDetails,
  userGenders: genders
};
