for(let i=1;i<=30;i++){
    if(i%5===0){
        console.log(i)
    }
}
//task 1
for(let n=20;n<=50;n++){
    if(n%7===0){
        console.log('task1:',n);
    }
}
//task 2
for(let a=40;a<=80;a++){
    if(a%5===0 && a%7===0){
        console.log('task2:',a);
    }
}
//task 3
let count=0;
for(let b=1;b<=40;b++){
    if(b%13===0){
  count+=b;
    }  

}    console.log('task3:',count);
//task 4
for(i=1;i<=50;i+=4){
    console.log('task4:',i);
}
//task 5
 for(d=0;d<=100;d++){
    if(d%6==0 && d%9===0){
        console.log('task5:',d);
    }
 }
 //task 6
  let esum=0
 for(e=1;e<=50;e++){
    if(e%3===0 && e%4===0){
        console.log('task6:',e);
        esum+=e;
    }
 }console.log('task6total:',esum);