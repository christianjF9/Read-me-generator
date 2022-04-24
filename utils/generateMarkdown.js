var mit = {
  license : 'https://choosealicense.com/licenses/mit/',
  badge: '[shields.io](https://img.shields.io/static/v1?label=licence&message=mit&color=green)'
}

var gnu ={
  license : 'https://choosealicense.com/licenses/gpl-3.0/',
  badge : '[shields.io](https://img.shields.io/static/v1?label=licence&message=mit&color=green)'
}

var none ={
  license : '',
  badge : ''
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 return license.badge; 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string 
function renderLicenseLink(license) {
  return license.license;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license != none)
  return `##License 

  ${renderLicenseLink(license)}
`
else return '';
}

function PickLicence(choice){
  if(choice=='mit'){
    return mit;
  } else if(choice =='gnu')
  return gnu;
  else return none;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const{title,description,installation,contribution,usage, test,licence} = data;
  var licenceobj = mit;
  return `${renderLicenseBadge(licenceobj)}
  # ${title}

  ## Description 
  
  ${description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation 
  
  ${installation}
  
  ## Usage 
  
  ${usage}

  ${renderLicenseSection(licenceobj)}
    
  ## How to Contribute 
  
  ${contribution}
  
  ## Tests 
  
  ${test}
  `;
}



module.exports = generateMarkdown;
