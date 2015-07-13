var count = 0;
function countBs(string){
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === "B") count++;
  }
}
countBs("BlahBlahBlah")
console.log(count);

var count2 = 0;
function countChar(string, char){
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === char) count2++;
  }
}
countChar("BlahBlaahBlah", "a");
console.log(count2);
