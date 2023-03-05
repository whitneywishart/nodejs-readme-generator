// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return "";

  } else if (license == "Apache License 2.0") {
    return "![License badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";

  } else if (license == "Boost Software License 1.0") {
    return "![License badge](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";

  } else if (license == "BSD 2-Clause \"Simplified\" License") {
    return "![License badge](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)";

  } else if (license == "BSD 3-Clause \"New\" or \"Revised\" License") {
    return "![License badge](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";

  } else if (license == "Creative Commons Zero v1.0 Universal") {
    return "![License badge](https://licensebuttons.net/l/zero/1.0/80x15.png)";

  } else if (license == "Eclipse Public License 2.0") {
    return "![License badge](https://img.shields.io/badge/License-EPL_2.0-red.svg)";

  } else if (license == "GNU General Public License v2.0") {
    return "![License badge](https://img.shields.io/badge/License-GPL_v2-blue.svg)";

  } else if (license == "GNU General Public License v3.0") {
    return "![License badge](https://img.shields.io/badge/License-GPLv3-blue.svg)";

  } else if (license == "MIT License") {
    return "![License badge](https://img.shields.io/badge/License-MIT-yellow.svg)";

  } else if (license == "Mozilla Public License 2.0") {
    return "![License badge](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";

  } else if (license == "The Unlicense") {
    return "![License badge](https://img.shields.io/badge/license-Unlicense-blue.svg)";
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "None") {
    return "";

  } else if (license == "Apache License 2.0") {
    return "![License link](https://opensource.org/licenses/Apache-2.0)";

  } else if (license == "Boost Software License 1.0") {
    return "![License link](https://www.boost.org/LICENSE_1_0.txt)";

  } else if (license == "BSD 2-Clause \"Simplified\" License") {
    return "![License link](https://opensource.org/licenses/BSD-2-Clause)";

  } else if (license == "BSD 3-Clause \"New\" or \"Revised\" License") {
    return "![License link](https://opensource.org/licenses/BSD-3-Clause)";

  } else if (license == "Creative Commons Zero v1.0 Universal") {
    return "![License link](http://creativecommons.org/publicdomain/zero/1.0/)";

  } else if (license == "Eclipse Public License 2.0") {
    return "![License link](https://opensource.org/licenses/EPL-2.0)";

  } else if (license == "GNU General Public License v2.0") {
    return "![License link](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";

  } else if (license == "GNU General Public License v3.0") {
    return "![GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)";

  } else if (license == "MIT License") {
    return "![MIT License](https://opensource.org/licenses/MIT)";

  } else if (license == "Mozilla Public License 2.0") {
    return "![Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)";

  } else if (license == "The Unlicense") {
    return "![The Unlicense](http://unlicense.org/)";
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license !== "None") {
    return `Covered under license: ${renderLicenseLink(data.license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Testing](#testing)<br><br>

  ## Installation
  ${data.installation}<br><br>

 ## Usage
  ${data.usage}<br><br>

 ## Contributing
  ${data.contribute}<br><br>

  ## Testing
  ${data.test}<br><br>

  ## License
  ${data.usage}
`;
}

module.exports = generateMarkdown;
