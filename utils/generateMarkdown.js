// Function to render the license badge based on the license type
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0 License':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'Boost Software License 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    case 'BSD 3-Clause License':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'BSD 2-Clause License':
      return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
    case 'CC0-1.0':
      return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
    case 'CC BY 4.0':
      return '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)';
    case 'CC BY-SA 4.0':
      return '[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)';
    case 'CC BY-NC 4.0':
      return '[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)';
    case 'CC BY-ND 4.0':
      return '[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)';
    case 'CC BY-NC-SA 4.0':
      return '[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)';
    case 'CC BY-NC-ND 4.0':
      return '[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)';
    case 'Eclipse Public License 1.0':
      return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
    case 'GNU GPL v3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'GNU GPL v2':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    case 'GNU AGPL v3':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
    case 'GNU LGPL v3':
      return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
    case 'GNU FDL v1.3':
      return '[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)';
    case 'The Hippocratic License 2.1':
      return '[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)';
    case 'The Hippocratic License 3.0':
      return '[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)';
    case 'IBM Public License Version 1.0':
      return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
    case 'ISC License (ISC)':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    case 'The MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Mozilla Public License 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case 'Attribution License (BY)':
      return '[![License: ODC BY](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)';
    case 'Open Database License (ODbL)':
      return '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)';
    case 'Public Domain Dedication and License (PDDL)':
      return '[![License: PDDL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)';
    case 'The Perl License':
      return '[![License: Perl](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
    case 'The Artistic License 2.0':
      return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
    case 'SIL Open Font License 1.1':
      return '[![License: OFL 1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)';
    case 'The Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    case 'The Do What the Fuck You Want to Public License':
      return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)';
    case 'The zlib/libpng License':
      return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)';
    default:
      return '';
  }
}

// Function to render the license link based on the license type
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache 2.0 License':
      return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
    case 'Boost Software License 1.0':
      return '[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)';
    case 'BSD 3-Clause License':
      return '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)';
    case 'BSD 2-Clause License':
      return '[BSD 2-Clause License](https://opensource.org/licenses/BSD-2-Clause)';
    case 'CC0-1.0':
      return '[CC0-1.0 License](http://creativecommons.org/publicdomain/zero/1.0/)';
    case 'CC BY 4.0':
      return '[CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/)';
    case 'CC BY-SA 4.0':
      return '[CC BY-SA 4.0 License](https://creativecommons.org/licenses/by-sa/4.0/)';
    case 'CC BY-NC 4.0':
      return '[CC BY-NC 4.0 License](https://creativecommons.org/licenses/by-nc/4.0/)';
    case 'CC BY-ND 4.0':
      return '[CC BY-ND 4.0 License](https://creativecommons.org/licenses/by-nd/4.0/)';
    case 'CC BY-NC-SA 4.0':
      return '[CC BY-NC-SA 4.0 License](https://creativecommons.org/licenses/by-nc-sa/4.0/)';
    case 'CC BY-NC-ND 4.0':
      return '[CC BY-NC-ND 4.0 License](https://creativecommons.org/licenses/by-nc-nd/4.0/)';
    case 'Eclipse Public License 1.0':
      return '[Eclipse Public License 1.0](https://opensource.org/licenses/EPL-1.0)';
    case 'GNU GPL v3':
      return '[GNU GPL v3 License](https://www.gnu.org/licenses/gpl-3.0)';
    case 'GNU GPL v2':
      return '[GNU GPL v2 License](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    case 'GNU AGPL v3':
      return '[GNU AGPL v3 License](https://www.gnu.org/licenses/agpl-3.0)';
    case 'GNU LGPL v3':
      return '[GNU LGPL v3 License](https://www.gnu.org/licenses/lgpl-3.0)';
    case 'GNU FDL v1.3':
      return '[GNU FDL v1.3 License](https://www.gnu.org/licenses/fdl-1.3)';
    case 'The Hippocratic License 2.1':
      return '[Hippocratic License 2.1](https://firstdonoharm.dev)';
    case 'The Hippocratic License 3.0':
      return '[Hippocratic License 3.0](https://firstdonoharm.dev)';
    case 'IBM Public License Version 1.0':
      return '[IBM Public License Version 1.0](https://opensource.org/licenses/IPL-1.0)';
    case 'ISC License (ISC)':
      return '[ISC License (ISC)](https://opensource.org/licenses/ISC)';
    case 'The MIT License':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'Mozilla Public License 2.0':
      return '[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)';
    case 'Attribution License (BY)':
      return '[Open Data Commons Attribution License](https://opendatacommons.org/licenses/by/)';
    case 'Open Database License (ODbL)':
      return '[Open Database License (ODbL)](https://opendatacommons.org/licenses/odbl/)';
    case 'Public Domain Dedication and License (PDDL)':
      return '[Public Domain Dedication and License (PDDL)](https://opendatacommons.org/licenses/pddl/)';
    case 'The Perl License':
      return '[Artistic License 2.0](https://opensource.org/licenses/Artistic-2.0)';
    case 'The Artistic License 2.0':
      return '[Artistic License 2.0](https://opensource.org/licenses/Artistic-2.0)';
    case 'SIL Open Font License 1.1':
      return '[SIL Open Font License 1.1](https://opensource.org/licenses/OFL-1.1)';
    case 'The Unlicense':
      return '[The Unlicense](http://unlicense.org/)';
    case 'The Do What the Fuck You Want to Public License':
      return '[WTFPL License](http://www.wtfpl.net/about/)';
    case 'The zlib/libpng License':
      return '[The zlib/libpng License](https://opensource.org/licenses/Zlib)';
    default:
      return '';
  }
}


// Function to render the license section based on the license type
function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);

  if (licenseLink) {
    return `This project is licensed under the ${licenseLink}.`;
  } else {
    return '';
  }
}


// Function to generate the markdown content based on the user's answers
function generateMarkdown(data) {
  const link = `[${data.title}](${data.deployedURL})`;
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Contribution](#contribution)
- [Tests](#tests)
- [Contact](#contact)
- [Link](#link)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${licenseSection}

## Features

${data.features}

## Contribution

${data.contribution}

## Tests

${data.tests}

## Contact
For any questions or inquiries, please reach out to me:
- Email: ${data.email}
- GitHub: [${data.github}](https://github.com/${data.github})

## Link

${link}
`;
}

// Export the generateMarkdown function
module.exports = generateMarkdown;
