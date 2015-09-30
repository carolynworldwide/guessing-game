var totalRight = 0;
  var username = prompt('What is your name?');
    alert('Good to meet you, ' + username);
  
  var question1 = prompt('Did I grow up in the United States?');
    if (question1.toUpperCase() === 'Y' || question1.toUpperCase() === 'YES') {
      alert('Right!');
      totalRight++;
    }
    else {
      alert('Wrong!');
    }
  
  var question2 = prompt('Do I speak German?');
    if (question2.toUpperCase() === 'N' || question2.toUpperCase() === 'NO') {
      alert('Correct!');
      totalRight++;
    }
    else {
      alert('Sorry!');
    }
  
  var question3 = prompt('Have I ever lived in Libya');
    if (question3.toUpperCase() === 'Y' || question3.toUpperCase() === 'YES') {
      alert('Indeed!');
      totalRight++;
    }
    else {
      alert('Actually I did!');
    }
  
  var closing = alert('Finished! You got ' + totalRight + ' right ' + username);

console.log(totalRight);
