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

/**
 *  Spatial Complexity:
 * Let's talk about spatial complexity or how much space (e.g. how much RAM or disk space) an algorithm needs to complete.
 */

/**
 * Iterative Sorts:
 *
 *(1) Bubble Sort:
 Example:
     [1, 5, 4, 2, 3]

Are 1 and 5 out of order? No.
Are 5 and 4 out of order? Yes. Swap.

[1, 4, 5, 2, 3]

Are 5 and 2 out of order? Yes. Swap.

[1, 4, 2, 5, 3]

Are 5 and 3 out of order? Yes. Swap.

[1, 4, 2, 3, 5]

End of the array, did we swap anything? Yes. Loop again.
Are 1 and 4 out of order? No.
Are 4 and 2 out of order? Yes. Swap.

[1, 2, 4, 3, 5]

Are 4 and 3 out of order? Yes. Swap.

[1, 2, 3, 4, 5]

Are 4 and 5 out of order? No.
End of the array, did we swap anything? Yes. Loop again.
Are 1 and 2 out of order? No.
Are 2 and 3 out of order? No.
Are 3 and 4 out of order? No.
Are 4 and 5 out of order? No.
End of the array, did we swap anything? No. List is sorted.

 */

//--------------------------------------------------------------------------------------------------------------//

//Example:

/**
 * 
function bubbleSort(nums) {
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < nums.length; i++) {
      // snapshot(nums);
      if (nums[i] > nums[i + 1]) {
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  // snapshot(nums);
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  bubbleSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
 */
