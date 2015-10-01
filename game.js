var totalRight = 0;
var username = prompt('What is your name?');
    alert('Good to meet you, ' + username);
 
var question1;
var question2;
var question3;

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');

function question1(){
	question1 = prompt('Did I grow up in the United States?');
	if (question1.toUpperCase() === 'Y' || question1.toUpperCase() === 'YES') {
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
	question2 = prompt('Do I speak German?');
	if (question2.toUpperCase() === 'N' || question2.toUpperCase() === 'NO') {
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
	question3 = prompt('Have I ever lived in Libya');
	if (question3.toUpperCase() === 'Y' || question3.toUpperCase() === 'YES') {
  		three.innerHTML = 'Indeed!'
  		//alert('Indeed!');
  		totalRight++;
	}else {
		there.innerHTML = 'Actually I did!'
  		//alert('Actually I did!');
	}
}
question3();

var closing = alert('Finished! You got ' + totalRight + ' right ' + username);

console.log(totalRight);
