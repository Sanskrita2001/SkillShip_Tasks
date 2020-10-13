const fetch = require("node-fetch");
const url = "https://api.github.com";

const getData = async (url) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

getData(url);

let todo = {
  userId: 123,
  title: "loren impsum doloris",
  completed: false,
};

fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  body: JSON.stringify(todo),
  headers: { "Content-Type": "application/json" },
})
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));
