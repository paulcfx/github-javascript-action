const core = require('@actions/core')
const github = require('@actions/github')

async function run() {
  try {
    const token = core.getInput('token')
    const title = core.getInput('title')
    const body = core.getInput('body')
    const assignees = core.getInput('assignees')

    const octokit = github.getOctokit(token)
    const response = await octokit.rest.issues.create({
      ...github.context.repo,
      title,
      body,
      assignees: assignees.split('\n')
    })

    core.setOutput('issue', response.data)
  } catch (e) {
    core.setFailed(e.message)
  }
}
module.exports = {
  run
}
