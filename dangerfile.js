const { danger, fail } = require('danger')

// pr check
if (!danger.github.pr.assignee) {
    fail(
        'This pull request needs an assignee, and optionally include any reviewers.'
    )
}
if (danger.github.pr.body.length < 10) {
  fail("This pull request needs a description.");
}

const { prHygiene } = require('danger-plugin-pr-hygiene')
prHygiene()

const { default: spellcheck } = require("danger-plugin-spellcheck");
spellcheck();
