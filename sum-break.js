let i = 1;
let sum = 0;
while (i <= 120) {
  sum = sum + i;
  console.log(i);
  i++;
  if(i>100){
    break;
  }
}
console.log(sum);
