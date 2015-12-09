module.exports ={
    'logeo Ogame':function(browser){
	browser
	.url('http://es.ogame.gameforge.com/')
	.waitForElementVisible('body',1000)
	.click('a[id=loginBtn]')
       	.click(".js_uniUrl option[value='s136-es.ogame.gameforge.com']")
	.setValue('input[id=usernameLogin]','Breaker')
	.setValue('input[id=passwordLogin]','Breaker6*')
	.click('input[id=loginSubmit]')
	//	.click('option[value=Japetus]')
	.end();
    }
}