// getJSON in Jquery

// getJSON in ES6

// simple request
const requestFetch = async (url, callback) =>
  await fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data));

// ajax request with error handling
const requestAjax = async (url, callback) =>
  await fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.log(error));

// request with data
const requestAjaxData = async (url, callback) =>
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: "data",
    }),
  })
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.log(error));

// selectores

const el = (selector) => document.querySelector(selector);
const all = (selector) => document.querySelectorAll(selector);
