const { Given, When, Then } = require("cucumber");

Given('I go to {string}', function (string) {
           // Write code here that turns the phrase above into concrete actions
           browser.get(site)
         });
