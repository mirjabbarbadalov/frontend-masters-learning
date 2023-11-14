function crossAdd(input) {
  var answer = [];
  for (var i = 0; i < input.length; i++) {
    var goingUp = input[i];
    var goingDown = input[input.length - 1 - i];
    answer.push(goingUp + goingDown);
  }

  return answer;
}

console.log(crossAdd("DataStructures"));

/**
 *  O(n): because wego through all inputs once in a loop
 */

function find(needle, stack) {
  for (var i = 0; i < stack.length; i++) {
    if (needle === stack[i]) return true;
  }
}

console.log(find("a", "dolma"));

/**
 * O(n): because we look the array once, worst case is when the needle at the end of the stack
 */

function makeTuples(input) {
  var answer = [];
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input.length; j++) {
      answer.push([input[i], input[j]]);
    }
  }
  return answer;
}

console.log(makeTuples("Baku"));

/**
 * This would be O(n2). For every input, we have to go through a full loop inside of another loop, meaning that we're doing a lot work!
 * A loop inside a loop inside a loop would likewise be O(n3).
 * If noo lopps just doing exit or return, then we're doing it in constant time, or O(n)
 */
