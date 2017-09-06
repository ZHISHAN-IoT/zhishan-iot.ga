/*
 * @Author:ZHISHAN-IoT
 * @Description:a function library for excuting login operation
 */

var testData = "admin"

//
function loginAuthentication()
{
	var r1 = document.getElementById("inName").value;
	var r2 = document.getElementById("in").value;

	if((r1 == testData)&&(r2 == testData))
	{
		//DEBUG
		alert("Successful!");
		
		return true;
	}
	else
	{
		//DEBUG
		alert("Failed to login");

		return false;
	}
}

/* ----- END OF FILE ----- */