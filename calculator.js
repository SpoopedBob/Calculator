// JavaScript Document

//Change Display
function d(val)  {
	document.getElementById("d").value = val;
	}
	
//Type numbers and operators
function v(val)  {
	document.getElementById("d").value += val;
	}

//Backspace
function c(val)  {
	document.getElementById("d").value = document.getElementById("d").value.slice(0, -1);
	}

//Rounding
function b(val)  {
	document.getElementById("d").value = Math.round(document.getElementById("d").value);
	}

//Rounding to nearest tenth
function a(val)  {
	document.getElementById("d").value = Math.round(document.getElementById("d").value * val) / val;
	}

//Squaring
function o(val)  {
	document.getElementById("d").value = (document.getElementById("d").value) * (document.getElementById("d").value);
	}


//Positive/negative
function t(val)  {
	e();
	document.getElementById("d").value = document.getElementById("d").value * -1;
	}

//Percentage
function p(val)  {
	e();
	document.getElementById("d").value = document.getElementById("d").value / 0.01;
	}

//Undo percentage
function y(val)  {
	document.getElementById("d").value = document.getElementById("d").value * 0.01;
	}

//Evaluate the equation
function e()  {
	try {
		d(eval(document.getElementById("d").value));
		}
	catch(err)  {
		d("that is bad boi");
		}
	}