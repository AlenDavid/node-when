module.exports = function (truthy, cb) {
  if (truthy) {
    return cb();
  }
};
