module.exports ={
    'Logeo Corpas Pre':function(browser){
	browser
	.url('http://pregrado.juanncorpas.edu.co/login/index.php')
	.waitForElementVisible('body',1000)
       	.setValue('input[id=username]','nivel7')
	//	.setValue('input[name=username]','nivel7')
	.setValue('input[id=password]','s0m0sLosMastersDel3learningYeah!!')
	//.click('input[id=loginbtn]')
	.submitForm('form#login')
	//	.click('option[value=Japetus]')
    }
}