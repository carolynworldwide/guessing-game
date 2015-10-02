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

function question1(){
	question1 = prompt(questions[0]);
	if (question1.toUpperCase() === answers[0] || question1.toUpperCase() === answers[0][0]) {
  		one.innerHTML = 'Right!'
  		//alert('Right!');
  		totalRight++;
	}else {
		one.innerHTML = 'Wrong!'
  		//alert('Wrong!');
	}
}
question1();

function question2(){
	question2 = prompt(questions[1]);
	if (question2.toUpperCase() === answers[1] || question2.toUpperCase() === answers[1][0]) {
  		//alert('Correct!');
  		two.innerHTML = 'Correct!'
  		totalRight++;
	}else {
		two.innerHTML = 'Sorry!'
  		//alert('Sorry!');
	}
}
question2();

function question3(){
	question3 = prompt(questions[2]);
	if (question3.toUpperCase() === answers[0] || question3.toUpperCase() === answers[0][0]) {
  		three.innerHTML = 'Indeed!';
  		//alert('Indeed!');
  		totalRight++;
	}else {
		three.innerHTML = 'Actually I did!';
  		//alert('Actually I did!');
	}
}
question3();

var closing = alert('Finished! You got ' + totalRight + ' right ' + username);

console.log(totalRight);
