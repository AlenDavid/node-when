const tap = require("tap");
const when = require("./index");

tap.type(when, "function", "function is exported by index.js file");

function iAmCallback() {
  return "i am callback";
}

tap.equal(
  when(true, iAmCallback),
  "i am callback",
  "trigger the callback function when the first argument is truthy"
);

function IWillThrowError() {
  throw new Error("i will throw error");
}

tap.doesNotThrow(
  when(false, IWillThrowError),
  "don't trigger the callback function when the first argument is falsy"
);
