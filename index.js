const diffArray = (arr1, arr2) => {
  const arr = arr1.concat(arr2);
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.lastIndexOf(arr[i]) !== arr.indexOf(arr[i])) {
      continue;
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
