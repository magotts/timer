let secs = process.argv.slice(2);

// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

//node timer1.js 10 3 5 15 9

for (let input of secs) {
  input = Number(input);
  if (!isNaN(input)) { // input should be a number and no negative number.
    setTimeout(() => {
      process.stdout.write(`will beat at ${input} seconds. \n`);
      process.stdout.write('\x07'); // beep
    }, input * 1000); // convert input to ms
  }
}