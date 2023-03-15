console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  for (let i = 0; i <= count; i++) {
    if (i % 2 == 1) {
      console.log(i);
    }
  }
}

printOdds(51);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
  let aboveSixteen = `Congrats ${userName}, you can drive!`;
  let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
  if (age < 16) {
    console.log(belowSixteen);
  } else {
    console.log(aboveSixteen);
  }
}

checkAge("Jeff", 15);

//Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function cartesian(x, y) {
  let origin = "This point is at the origin.";
  let quad1 = "This point is in quadrant 1.";
  let quad2 = "This point is in quadrant 2.";
  let quad3 = "This point is in quadrant 3.";
  let quad4 = "This point is in quadrant 4.";
  if (x == 0 && y == 0) {
    console.log(origin);
  } else if (x > 0 && y > 0) {
    console.log(quad1);
  } else if (x < 0 && y > 0) {
    console.log(quad2);
  } else if (x < 0 && y < 0) {
    console.log(quad3);
  } else {
    console.log(quad4);
  }
}

cartesian(1, -4);

//Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangle(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    console.log("This is an invalid triangle");
  } else if (a == b && b == c) {
    console.log("Equilateral");
  } else if (a == b || a == c || b == c) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
}

triangle(1, 1, 1);
