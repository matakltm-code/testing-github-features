"use strict";
const config = require("conventional-changelog-conventionalcommits");

module.exports = config({
  types: [
    { type: "feat", section: "New Features of buy2go" },
    { type: "fix", section: "Bugs of buy2go" },
  ],
});
