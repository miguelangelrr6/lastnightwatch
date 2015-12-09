module.exports = {
    'Plataforma 28 Test' : function (client) {
    client
    .url('http://plataforma.nivel7.net/moodle28/login/index.php?theme=clean')
    .resizeWindow(1920, 1080)
    .waitForElementVisible('body', 1000)
    // .assert.title('Plataforma')
    .assert.visible('input[name=username]')
    .setValue('input[name=username]', 'browserstack')
    .assert.visible('input[name=password]')
    .setValue('input[name=password]', '123456')
    .waitForElementVisible('input[id=loginbtn]', 1000)
    .click('input[id=loginbtn]')

    .url('http://plataforma.nivel7.net/moodle28/course/view.php?id=11')
    .waitForElementVisible('body', 1000)
    //.assert.containsText('block_xp-level-progress','class="bar"')
    .moveToElement('.block_xp-level-progress', 0, 0)
    .saveScreenshot('screenshots/FirefoxWindows1920x1080.png')

    //resize to 800x600 and take a new screenshot
    .resizeWindow(800, 600)
    .moveToElement('.block_xp-level-progress', 0, 0)
    .saveScreenshot('screenshots/FirefoxWindows800x600.png')

    //test with the default theme    
    .url('http://plataforma.nivel7.net/moodle28/course/view.php?id=11&theme=standard')
    .waitForElementVisible('body', 1000)
    .moveToElement('.block_xp-level-progress', 0, 0)
    .resizeWindow(1920, 1080)
    .saveScreenshot('screenshots/FirefoxWindows1920x1080StandardTheme.png')

    //test with the default theme 800x600
    .resizeWindow(800, 600)
    .moveToElement('.block_xp-level-progress', 0, 0)
    .saveScreenshot('screenshots/FirefoxWindows800x600StandardTheme.png')

    .pause(200)
    .end();
    }
};