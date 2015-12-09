module.exports ={
    'Logeo Corpas Altipal':function(browser){
	browser
	.url('http://aprende.altipal.com.co/login/index.php')
	.waitForElementVisible('body',1000)
	.getCssProperty("#page-content .loginpanel","display", function(result){
      		this.verify.equal(typeof result, "object");
		this.verify.equal(result.status, 0);
		this.verify.equal(result.value, 'block');
		if(result.value =='block'){
		    this.url('http://aprende.altipal.com.co/login/index.php/?theme=clean');
		    this.setValue('input[id=username]','nivel7')
		    this.setValue('input[id=password]','s0m0sLosMastersDel3learningYeah!!')
		    this.submitForm('form#login')
		    this.url('http://aprende.altipal.com.co/?theme=default');
			}
	    });
	//       	.setValue('input[id=username]','nivel7')
	//	.setValue('input[name=username]','nivel7')
	//	.setValue('input[id=password]','s0m0sLosMastersDel3learningYeah!!')
	//.click('input[id=loginbtn]')
	//	.submitForm('form#login')
	//	.click('option[value=Japetus]')
    }
}