// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT License':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    case 'Apache 2.0 License':
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`
    case 'Creative Commons': 
      return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)]`
    case 'GNU General Public License':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
    case 'none':
      return ''
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT License':
      return `(https://opensource.org/licenses/MIT)`
    case 'Apache 2.0 License':
      return `(https://opensource.org/licenses/Apache-2.0)`
    case 'Creative Commons':
      return `(http://creativecommons.org/publicdomain/zero/1.0/)`
    case 'GNU General Public License':
      return `(https://www.gnu.org/licenses/gpl-3.0)`
    case 'none':
      return ''
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT License':
      return `## License

${renderLicenseBadge(license) + renderLicenseLink(license)}
      `
    case 'Apache 2.0 License':
      return `## License
${renderLicenseBadge(license) + renderLicenseLink(license)}
      `
    case 'Creative Commons':
      return `## License
${renderLicenseBadge(license) + renderLicenseLink(license)}
      `
    case 'GNU General Public License':
      return `## License
${renderLicenseBadge(license) + renderLicenseLink(license)}
      `
    case 'none':
      return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ githubUsername, title, link, technologies, installation, instructions, description, email, license }) {
  let contributingSection = `## <a id="contributing"></a> Contributing 
  ### Bug Reports

  - Ensure your issue [has not already been reported]. It may already be fixed!
  - Include the steps you carried out to produce the problem.
  - Include the behavior you observed along with the behavior you expected, and
    why you expected it.
  - Include any relevant stack traces or debugging output.
  
  ### Feature Requests
  
  We welcome feedback with or without pull requests. If you have an idea for how
  to improve the project, great! All we ask is that you take the time to write a
  clear and concise explanation of what need you are trying to solve. If you have
  thoughts on _how_ it can be solved, include those too!
  
  The best way to see a feature added, however, is to submit a pull request.
  
  ### Pull Requests
  
  - Before creating your pull request, it's usually worth asking if the code
    you're planning on writing will actually be considered for merging. You can
    do this by [opening an issue] and asking. It may also help give the
    maintainers context for when the time comes to review your code.
  
  - Ensure your [commit messages are well-written]. This can double as your
    pull request message, so it pays to take the time to write a clear message.
  
  - Add tests for your feature. You should be able to look at other tests for
    examples. If you're unsure, don't hesitate to [open an issue] and ask!
  
  - Submit your pull request!
  
  ### Support Requests
  
  For security reasons, any communication referencing support tickets for Coinbase
  products will be ignored. The request will have its content redacted and will
  be locked to prevent further discussion.
  `

  let linkSection
  if (link.trim() === '') linkSection = `[Link to demo](${link})`
  else linkSection = ''

  let x = `# ${title} 
  ${description} 
  ${renderLicenseSection(license)}
  ## Table of Contents
  - [Technologies Used](#tech)
  - [Installation](#installation) 
  - [Usage](#usage) 
  - [Contributing](#contributing) 
  - [Tests](#tests)
  - [Contact Me](#contact-me)
  
  ## <a id="tech"></a> Technologies Used
  ${technologies}
  ## <a id="installation"></a> Installation 
  - Clone to machine
  - Run \`${installation.trim()}\` to run script.
  ## <a id="usage"></a> Usage
  ${linkSection}
  ${instructions}
  ${contributingSection}
  ## <a id="tests"></a> Tests
  Coming soon...
  ## <a id="contact-me"></a> Contact Me
  If you have any questions. You can reach me at [my Github](https://www.github.com/${githubUsername}) or you can email me at: ${email}.
  

 `
  return x;
}

module.exports = generateMarkdown;
