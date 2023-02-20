let myArr = ["d", "d", "d", "d", "d", "d"];
let same = true;
for (let i = 0; i < myArr.length - 1; i++) {
  if (myArr[i] !== myArr[i + 1]) {
    same = false;
    break;
  }
}
if (same) {
  console.log("true");
} else {
  console.log("false");
}
