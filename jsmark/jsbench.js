//JSBench 2011
//Copyright (C) Dan Tohatan, Dacris Software Inc.
//All rights reserved.
//This code may not be copied without prior written permission from Dacris Software.

function jsBench() { }

jsBench.prototype.run = function(testFunc, testRunTime) {
	var runTime = testRunTime || 200;
	var iter = 0;
	var endTime = new Date();
	endTime.setTime(endTime.getTime()+runTime);
	while((new Date()) < endTime)
	{
		iter+=testFunc();
	}
	var result = iter / (runTime / 1000);
	return { value: result };
}
