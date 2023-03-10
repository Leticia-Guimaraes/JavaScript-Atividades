// function displayUser(user) {
//   return user.name + " " + user.surname + " (" + user.age + ")";
// }

// const output = displayUser(userObject);

const userObject = {
  name: "John",
  surname: "Doe",
  age: 40,
  location: {
    latitude: 43,
    longitude: 12,
  },
};

const displayUser = (user) =>
  user.name + " " + user.surname + " (" + user.age + ")";

const output = displayUser(userObject);

console.log(output);
