function fibs(n) {
  const arr = [0, 1]
  for (let i = 0; i < n - 2; i++) {
    arr.push(arr[i] + arr[i + 1])
  }

  return arr;
}

function fibsRec(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }

  const previous = fibsRec(n-1);
  previous.push(previous[previous.length - 1] + previous[previous.length - 2])
  return previous
}

console.log(fibsRec(5))