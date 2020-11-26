const { Given, When, Then } = require("cucumber");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const expect = chai.expect;

Given('I go to {string}', function (string, callback) {
    browser.get(string);//.then(callback);
});
When('I add {string} in the task field', function(task) {
    element(by.model('todoList.todoText')).sendKeys(task);
});
When('I click the {string} button', function (buttonName) {
    // Write code here that turns the phrase above into concrete actions
    element(by.css('li:nth-child(3) > div > a.text-primary')).click();
});
/*module.exports = function () {
  this.Given(/^I go to "([^"]*)"$/, function (site,callback) {
    browser.get(site).then(callback)
  });

  this.When(/^I add "([^"]*)" in the task field$/, function(task) {
    element(by.model('todoList.todoText')).sendKeys(task);
  });

  this.When(/^I click the add button$/, function() {
    let el = element(by.css('[value="add"]'));
    el.click();
  });

  this.Then(/^I should see my new task in the list$/, function(callback) {
    let todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).to.eventually.equal(3);
    expect(todoList.get(2).getText()).to.eventually.equal('Do not Be Awesome')
      .and.notify(callback);
  });
}*/

