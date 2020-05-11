
const populateLicense = (author) => {
  if (!author){
    return "";
  }
      return `## License

    MIT License

    Copyright (c) ${new Date().getFullYear()} ${author}

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    `
};


const generateTitle = title => {
  return `# ${title}

  `;
};

const generateDescription = description => {  
  if (!description){
    return "";
  } 
  return `## Description
  
  ${description}
  `;
};

const generateInstallation = (confirmInstall, installSteps) => {
  if (!confirmInstall && confirmInstall == false){
    return '';
  }

  if (!installSteps){
    return '';
  }

  return `## Installation

   ${installSteps}
  
  `;
};

const generateUsage = (confirmUsage, Usage) => {
  if (!confirmUsage && confirmUsage == false){
    return '';
  }

  if (!Usage){
    return '';
  }

  return `## Usage

   ${Usage}
  
  `;
};

const generateCredit = (confirmCredit, Credit) => {
  if (!confirmCredit && confirmCredit == false){
    return '';
  }

  if (!Credit){
    return '';
  }

  return `## Credits

   ${Credit}
  
  `;
};

const generateLicense = (confirmLicense, author) => {
  if (!confirmLicense && confirmLicense == false){
    return '';
  }

  return populateLicense(author);
};

const generateBadge = (confirmBadge, Badge) => {
  if (!confirmBadge && confirmBadge == false){
    return '';
  }

  if (!Badge){
    return '';
  }

  return `## Badge

  ![Github licence](http://img.shields.io/badge/license-${Badge}-blue.svg)
   `;
};

const generateContribution = (confirmContributions, Contribution) => {
  if (!confirmContributions && confirmContributions == false){
    return '';
  }

  if (!Contribution){
    return '';
  }

  return `## Contribution

   ${Contribution}
  
  `;
};

const generateTest = (confirmTest, Test) => {
  if (!confirmTest && confirmTest == false){
    return '';
  }

  if (!Test){
    return '';
  }

  return `## Test

   ${Test}
  
  `;
};

const populateQuestions = (username, useremail) => {
  if (!useremail && useremail == ""){
    return '';
  }
  if (!username && username == ""){
    return '';
  }

  return `## Questions

   For any clarification please reach out to ${username} at ${useremail}.
  
  `;
};

const populateGithubDetails = (username) => {
  if (!username && username == ""){
    return '';
  }

  return `## Github

  https://github.com/${username}/readmegenerator
  
  `;
};

const generateTOC = (data) => {
  if (!data){
    return '';
  }
  
  var toc_content = "## Table of Contents\n";
  if (data.ConfirmInstallation == true){ 
     toc_content = toc_content + "\n" + "* [Installation](#Installation)\n"
  }
  
  toc_content = toc_content + "\n" + "* [Github Details](#Github)\n";

  if (data.ConfirmUsage == true){
    toc_content = toc_content + "\n" + "* [Usage](#Usage)\n"
  }

  if (data.ConfirmCredit == true){
    toc_content = toc_content + "\n" + "* [Credit](#Credits)\n"
  }

  if (data.ConfirmLicense == true){
    toc_content = toc_content + "\n" + "* [License](#License)\n"
  }

  if (data.ConfirmContributions == true){
    toc_content = toc_content + "\n" + "* [Badge](#Badge)\n"
  }

  if (data.ConfirmContributions == true){
    toc_content = toc_content + "\n" + "* [Contribution](#Contribution)\n"
  }

  if (data.ConfirmTest == true){
    toc_content = toc_content + "\n" + "* [Test](#Test)\n"
  }

  toc_content = toc_content + "\n" + "* [Questions](#Questions)\n";


  return `
   ${toc_content}
  `;
};


// function to generate markdown for README
function generateMarkdown(data) {
  //const { projects, about, ...header } = templateData;

  console.log(data);
  return `${generateTitle(data.projectName)}

  ${generateDescription(data.Description)}

  ${generateTOC(data)}

  ${generateInstallation(data.ConfirmInstallation, data.InstallationSteps)}

  ${populateGithubDetails(data.author)}
  
  ${generateUsage(data.ConfirmUsage, data.Usage)}

  ${generateCredit(data.ConfirmCredit, data.Credit)}

  ${generateLicense(data.ConfirmLicense, data.author)}

  ${generateBadge(data.ConfirmLicense, data.badgeName)}

  ${generateContribution(data.ConfirmContributions, data.Contribution)}

  ${generateTest(data.ConfirmTest, data.Test)}

  ${populateQuestions(data.author,data.email)}
`;
}

module.exports = generateMarkdown;
