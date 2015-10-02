var totalRight = 0;
var username = prompt('What is your name?');
    alert('Good to meet you, ' + username);
 
var question1;
var question2;
var question3;

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');

var questions = ['Did I grow up in the United States?', 'Do I speak German?', 'Have I ever lived in Libya'];
var answers = ['YES','NO'];

var elImg1 = document.getElementById('img-contain1');
var elImg2 = document.getElementById('img-contain2');
var elImg3 = document.getElementById('img-contain3');

var elResults = document.getElementById('results');

function question1(){
	question1 = prompt(questions[0]);
	if (question1.toUpperCase() === answers[0] || question1.toUpperCase() === answers[0][0]) {
  		elImg1.innerHTML = "<img src='img/success-1.jpg' />";
  		one.innerHTML = 'Right!'
  		//alert('Right!');
  		totalRight++;
	}else {
		one.innerHTML = 'Wrong!'
  		//alert('Wrong!');
	}
}


function question2(){
	question2 = prompt(questions[1]);
	if (question2.toUpperCase() === answers[1] || question2.toUpperCase() === answers[1][0]) {
  		//alert('Correct!');
  		elImg2.innerHTML = "<img src='img/success-2.jpg' />"
  		two.innerHTML = 'Correct!'
  		totalRight++;
	}else {
		two.innerHTML = 'Sorry!'
  		//alert('Sorry!');
	}
}


function question3(){
	question3 = prompt(questions[2]);
	if (question3.toUpperCase() === answers[0] || question3.toUpperCase() === answers[0][0]) {
		elImg3.innerHTML = "<img src='img/success-3.jpg' />"
  		three.innerHTML = 'Indeed!';
  		//alert('Indeed!');
  		totalRight++;
	}else {
		three.innerHTML = 'Actually I did!';
  		//alert('Actually I did!');
	}
}

function getResults() {
	elResults.textContent = "You got " + totalRight + ' right ' + username;
}

question1();
window.setTimeout(question2,100);
window.setTimeout(question3,150);
window.setTimeout(getResults,200);


