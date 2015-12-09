this.demoTest = function (client) {
    client.getLocation("#main ul li a.first", function(result) {
	    this.assert.equal(typeof result, "object");
	    this.assert.equal(result.status, 0);
	    this.assert.equal(result.value.x, 200);
	    this.assert.equal(result.value.y, 200);
	});
};