const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));
  allureCypress(on, {
    resultsDir: "./allure-results",
  });

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    //baseUrl: "https://cookbook.seleniumacademy.com/",
    setupNodeEvents, specPattern: ["**/*.feature", "**/*.cy.js"],
    env: {
      login_url: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      products_url: "/products",
      username: "Admin",
      password: "admin123"
    },
    viewportWidth: 1000,
    viewportHeight: 650,
    pageLoadTimeout: 30000,
    defaultCommandTimeout: 6000,
    watchForFileChanges: true // you can false it and it will not load the program automatically after any change, you have to run it manually 
  },

});
