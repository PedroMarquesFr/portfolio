// const { NightwatchBrowser } = require('nightwatch');

describe("Ecosia.org Demo", function () {
    before((browser) => browser.url("http://localhost:3000/"));
  
    test("Demo test ecosia.org", function (browser) {
      browser
        .waitForElementVisible("body", 3000)
        .assert.visible("input[data-testid=email-input]")
        .setValue("input[type=text]", "lol")
        .setValue("input[type=password]", "123") // press Enter to search
        .pause(1000)
        .click(".btn-primary")
    });
  
    after((browser) => browser.end());
  });
  