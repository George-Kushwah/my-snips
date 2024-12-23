const scanner = require("sonarqube-scanner").default;
scanner(
  {
    serverUrl: "http://localhost:9000",
    token: "squ_844c9365abd5379ea02e988eaa24e6e05eff2c9d",
    login: "admin",
    password: "Admin",
    options: {
      "sonar.projectName": "My-Test",
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
