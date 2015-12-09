module.exports = {
    'Plataforma 28 Test' : function (client) {
    client
    .url('http://plataforma.nivel7.net/moodle28/login/index.php?theme=clean')
    .resizeWindow(1920, 1080)
    .waitForElementVisible('body', 1000)
    // .assert.title('Paltaforma')
    .assert.visible('input[name=username]')
    .setValue('input[name=username]', 'estudianten7')
    .assert.visible('input[name=password]')
    .setValue('input[name=password]', 'nivelSie7e-')
    .waitForElementVisible('input[id=loginbtn]', 1000)
    .click('input[id=loginbtn]')
    .url('http://plataforma.nivel7.net/moodle28/course/view.php?id=11')
    .saveScreenshot('screenshots/screenShotFirefoxWindows.png')
    .pause(1000)
    //.assert.containsText('ol#rso li:first-child',
    // 'Rembrandt - Wikipedia')
    .end();
    }
};