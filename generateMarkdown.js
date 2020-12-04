// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}
  # USAGE 
  ${data.usage}
  ${data.issues}

`;
}

module.exports = generateMarkdown;
