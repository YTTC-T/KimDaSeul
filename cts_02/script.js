function solution1(num1, num2) {
  var answer = 0;
  answer = Math.trunc((num1 / num2) * 1000);
  return answer;
}

/***************************/

function solution2(num1, num2) {
  return num1 === num2 ? 1 : -1;
}

/***************************/

function getGCD(num1, num2) {
  return num1 % num2 === 0 ? num2 : getGCD(num2, num1 % num2);
}

function solution3(numer1, denom1, numer2, denom2) {
  let i = numer1 * denom2 + numer2 * denom1;
  let j = denom1 * denom2;
  let gcd = getGCD(i, j);

  return [i / gcd, j / gcd];
}

/***************************/

function solution4(numbers) {
  var answer = [];
  numbers.map((number) => {
    answer.push(number * 2);
  });
  return answer;
}

function solution4_1(numbers) {
  return numbers.map((number) => number * 2);
}
