function lifeInWeeks(age) {
    let yearsRemaining = 90 - age;
    let days = yearsRemaining * 365;
    let weeks = yearsRemaining * 52;
    let months = yearsRemaining * 12;
   console.log(`You have ${days} days, ${weeks} weeks, and ${months} months left.`);
}

lifeInWeeks(33);


//love calculator

function loveCalculator(name1, name2) {
    let percentage = Math.floor(Math.random() * 101);
    
    let message;
    if (percentage < 30) {
      message = 'Not a great match...';
    } else if (percentage < 60) {
      message = 'Good match!';
    } else {
      message = 'Perfect match!!';
    }
    
    console.log(`${name1} and ${name2} are ${percentage}% match! ${message}`);
  }
  
  loveCalculator('Ifeanyi', 'Stephanie');
