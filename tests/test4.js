module.exports ={
    'logeo Ogame':function(browser){
	browser
	.url('https://campus.nivel7.net/login/index.php')
	.waitForElementVisible('body',1000)
	.setValue('input[id=username]','mreyes')
	.setValue('input[id=password]','Breaker6*')
	.click('input[id=loginbtn]')
	//	.click('option[value=Japetus]')
    }
}