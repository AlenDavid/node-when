const t = require("tap");
const when = require("./index");

t.todo("function is exported by index.js file");
t.todo("validates the truthiness of the first argument");
t.todo("accepts a callback function as the second argument");
t.todo("trigger the callback function when the first argument is truthy");
t.todo("don't trigger the callback function when the first argument is falsy");
