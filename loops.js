
function forLoop(array) {
  for (let i = 1; i < 25; i++) {
    array = [];
    if (i === 1) {
      array.push('I am 1 strange loop.');
    } else if (i > 1 && i < 1) {
      array.push('I am ${i} strange loops.');
    }
  return array
  }
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return "done"
}

function doWhileLoop(array) {
  function maybeTrue(n) {
    return Math.random() >= 0.5
  }
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue())
}
