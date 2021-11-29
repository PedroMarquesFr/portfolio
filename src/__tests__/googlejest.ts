// const { NightwatchBrowser } = require('nightwatch');

describe("Ecosia.org Demo", function () {
  before((browser) => browser.url("https://www.google.com"));

  test("Demo test ecosia.org", function (browser) {
    browser
      .waitForElementVisible("body", 3000)
      .assert.title("Google")
      .assert.visible("input[type=text]")
      .setValue("input[type=text]", "lol")
      .setValue("input[type=text]", browser.Keys.ENTER) // press Enter to search
      .pause(1000)
      .assert.containsText(
        "#rso a:first-child",
        "League of Legends",
        "ESSE E O TEXTO QUE VAI APARECER NO LOG DO TEST"
      );
  });

  after((browser) => browser.end());
});
