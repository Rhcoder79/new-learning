//task1
const price=4500;
if(price>6000){
    const discount=price/100 *15;
    const pay=price-discount;
    console.log(pay);
}else if(price>3000){
    const discount=price /100 * 5;
    const pay=price-discount;
    console.log(pay);
}else{
    console.log(price);
}
//task 2
const age=18;
const foodPrice=1100;
if(age<12){
    console.log('eat free');
}else if(age>60){
     const discount= foodPrice/100 *50;
    const pay=foodPrice-discount;
    console.log(pay);
}else{
    console.log(foodPrice);
}
//task 3
const balance=5001;
if(balance<1000){
    console.log('please deposit');
}else if(balance<5000){
    console.log('enjoy life');
}else{
    console.log('you are rich');
}
//task 4
const passMarks=100.1;
if(passMarks<50){
    console.log('F');
}else if(passMarks<80){
console.log('Pass');
}else if(passMarks<=100){
    console.log('A+');
}else{
    console.log('undifined');
}
//task 5
const page=499;
if(page<100){
    console.log('small book');
}else if(page<500){
    console.log('mid-level-book')
}else{
    console.log('heart attack book');
}
//task 6
const tempreture=20.1;
if(tempreture<0){
    console.log('Ice');
}else if(tempreture<=20){
    console.log('Cool');
}else{
    console.log('hot hot');
}
//task 7
const level=7;
if(level<10){
    console.log('novice');
}else if(level<50){
    console.log('expert');
}else{
    console.log('pro');
}