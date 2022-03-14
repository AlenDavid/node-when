const tap = require("tap");
const when = require("./index");

tap.type(when, "function", "function is exported by index.js file");

tap.todo("validates the truthiness of the first argument");
tap.todo("accepts a callback function as the second argument");
tap.todo("trigger the callback function when the first argument is truthy");
tap.todo(
  "don't trigger the callback function when the first argument is falsy"
);
