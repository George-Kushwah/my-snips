const scanner = require("sonarqube-scanner").default;
scanner(
  {
    serverUrl: "http://localhost:9000",
    token: "squ_5547d14ade24d774d3614bdff93ca1f1b0165e0d",
    login: "admin",
    password: "Admin",
    options: {
      "sonar.projectName": "React-app",
      "sonar.projectDescription": 'Description for "My App" project...',
      "sonar.sources": "./src",
      "sonar.exclusions": "./src/Redux/*.tsx,./src/__test__/*.tsx",
      "sonar.tests": "./src",
      "sonar.test.inclusions": "**/*.test.tsx,**/*.test.ts",
      "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
      "sonar.testExecutionReportPaths": "test-report.xml",
    },
  },
  (error) => {
    if (error) {
      console.error(error);
    }
    process.exit();
  }
);
