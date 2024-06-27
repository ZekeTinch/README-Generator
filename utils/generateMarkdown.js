// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description

  ${data.description}


  ## License
  ${renderLicenseBadge(data.license)}

  ## Title
  ${renderLicenseBadge(data.Title)}

  ##Installations
  ${renderLicenseBadge(data.Installations)}

  ##Usage
    ${renderLicenseBadge(data.Usage)}

    ##Contributing
      ${renderLicenseBadge(data.Contributing)}

      ##Tests
  ${renderLicenseBadge(data.Tests)}

  ##Github
    ${renderLicenseBadge(data.Github)}

##Email
  ${renderLicenseBadge(data.Email)}


`;
}

module.exports = generateMarkdown;
