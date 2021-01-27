function add(a, b) {
  return a + b;
}

let kata = add(5, 5);

function multiply(a, b) {
  let count = 0;
  let answer = 0;
  while (count < b) {
    answer = add(a, answer);
    count++;
  }
  return answer;
}

let kata2 = multiply(6, 4);

function power(x, n) {
  let count = 0;
  let answer = 1;
  while (count < n) {
    answer = multiply(x, answer);
    count++;
  }
  return answer;
}

let kata3 = power(2, 8);

function factoria(x) {
  let count = 0;
  let answer = 1;
  let decrementingNumber = x;
  while (count < x) {
    answer = multiply(decrementingNumber, answer);
    decrementingNumber--;
    count++;
  }
  return answer;
}

function fibonacci(n) {
  let count = 0;
  let fib = [0, 1];
  while (count < n) {
    fib.push(add(fib[count + 1]));
    count++;
  }
  return fib[n - 1];
}

let kataBonus = fibonacci(8);
console.log("Fibonacci - Bonus", kataBonus);
