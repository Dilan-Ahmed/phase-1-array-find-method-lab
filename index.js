// code your solution here
const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
];

function superbowlWin(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].result === "W") {
      return array[i].year;
    }
  }
  return undefined;
}

superbowlWin(record);
console.log(superbowlWin(record));
