// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.description}

# Table of Contents

1. [USAGE](#usage)
2. [ISSUES](#issues)
3. [INSTALLATION](#installation)
4. [CONTRIBUTIONS](#contributions)
5. [TESTS](#tests)
6. [QUESTIONS](#questions)

# USAGE 

  ${data.usage}

# ISSUES

  ${data.github}

# INSTALLATION

  ${data.installation}

# CONTRIBUTIONS

  ${data.contributions}

# TESTS

  ${data.tests}

# QUESTIONS

  ${data.email}
`;
}

module.exports = generateMarkdown;
