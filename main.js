// function num(a){
//     console.log(a);
// }
// num(20);

// function num1(b=15){
//     console.log(b);
// }
// num1();

// function num1(b2=15){
//     console.log(b2);
// }
// num1(20);

//1
let num=(a)=>console.log(a);
num(10);

//2
numbur1=(b)=>{
    return b;
}

console.log(numbur1(20));

//3.
add=(c,d)=>{
    let e=c+d;
    console.log(e);
}

add(10,10);

//4.
headnum1=(a=30)=>console.log(a);
headnum1();

//5.
add=(c,d,f)=>{
    let g=c+d-f;
    console.log(g);
}

add(10,10,30);

//6.
headnum2=(a=30,b=30,c=30)=>a+b+c;
console.log(headnum2());

//7.
head=(a,b,c)=>a-b+c;
console.log(head(10,10,20));

//8.
exnum=(a1,a2,a3)=>{
   let b1=a1+(a2/a3);
   console.log(b1)
}
exnum(10,10,20);

//9.
sum=(a)=>10+a;
console.log(sum(5));

//10.
sum2=(a,b,c)=>20-a+b+c;
console.log(sum(10,10,10));

//11.
num3=(x=20)=>console.log(x);
num3(undefined);
