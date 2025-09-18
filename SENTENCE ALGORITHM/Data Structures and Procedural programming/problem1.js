var set1 = [3, 1, 7, 9];
var set2 = [2, 4, 1, 9, 3];

var sum = 0;
function isInArray(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return true;
    }
  }
  return false;
}

for (var i = 0; i < set1.length; i++) {
  if (!isInArray(set2, set1[i])) {
    sum = sum + set1[i];
  }
}

for (var i = 0; i < set2.length; i++) {
  if (!isInArray(set1, set2[i])) {
    sum = sum + set2[i];
  }
}

console.log("Sum of distinct elements: " + sum);
