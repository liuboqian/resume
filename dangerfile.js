const { danger, fail } = require('danger')

// pr check
if (!danger.github.pr.assignee) {
    fail(
        'This pull request needs an assignee, and optionally include any reviewers.'
    )
}
if (danger.github.pr.body.length < 10) {
    fail('This pull request needs a description.')
}
if (
    !danger.github.pr.title.match(
        /^(?::\w*:|(?:(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])))\s(?<type>\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*(?:(?!\s).))(?:\s\(?(?<ticket>#\d*)\)?)?$/
    )
) {
    fail(
        "Title must contains gitmoji and type, like ':art:feat: implement create user'."
    )
}

const { prHygiene } = require('danger-plugin-pr-hygiene')
prHygiene()

const { default: spellcheck } = require("danger-plugin-spellcheck");
spellcheck();
