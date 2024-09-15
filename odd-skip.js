for(let i = 1; i <= 40; i++) {
    if (i % 2 === 1) {
        continue;
    }
    console.log(i);
}

let i = 1;
let num;
while(i<=40){
    num= i;
    i++;
    if(num%2===0){
        continue;
    }
    console.log(num);
}
