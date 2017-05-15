const guid = require('./guid');

module.exports = function User(username, password) {
  const user = Object.assign({
    // default property values
    id: guid(),
    active: false,
    saved: false,
  }, { username, password });

  const methods = {
    save: function (cb) {
      // mock async function, pretend it writes to a database, or calls an API
      setTimeout(function () {
        cb();
      }, 100);
    },

    clone: function () {
      const newUser = new User(user.username, user.password);

      // set clone to active if the source is active
      if (this.get('active')) {
        newUser.activate();
      }

      return newUser;
    },

    activate: function () {
      // simple helper to set active to true
      this.set('active', true);
    },

    set: function (prop, value) {
      // only modify properties, don't create new ones
      if (user[prop] == null) {
        throw new Error(`Can create new property "${prop}"`);
      }

      user[prop] = value;
    },

    get: function (prop) {
      // return a shallow clone of the user object
      if (prop == null) return Object.assign({}, user);
      // return the property on the user object
      return user[prop];
    },
  };

  return methods;
}
