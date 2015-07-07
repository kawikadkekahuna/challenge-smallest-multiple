/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function(ceiling) {
  // do work here
  var startingMultiple = 2;
  var counter = 0;
  var multiplier = 1;
  var startingNumber = ceiling;
  var numberFinder = true;
  var god = false;
  var comparableNumFinderRunning = true;
  var smallestPositiveMultiple;


  while (comparableNumFinderRunning) {
    var smallestPositiveMultiple = ceiling * multiplier;
    while (numberFinder) {
      if (smallestPositiveMultiple % startingMultiple === 0) {
        startingMultiple++;
        if (ceiling === startingMultiple) {
          return smallestPositiveMultiple;
          comparableNumFinderRunning = false;
        }
      } else {
        startingMultiple = 2;
        numberFinder = false;
      }
    }
    multiplier++;
    numberFinder = true;
  }

};