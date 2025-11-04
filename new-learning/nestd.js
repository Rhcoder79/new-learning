const money=299.99;
const popcorn=45;
if(money>=300){
    console.log('going to watch movie');
    if(popcorn<=50){
        console.log('i will buy it');
    }else{
        console.log('i will not buy popcorn')
    }
}else{
    console.log('i will return to home');
}
//task 1
const isInvited=true;
const pocketMoney=999;
if(isInvited){
    console.log('i will attend the birthday party');
    if(pocketMoney>=1000){
        console.log('buy for a gift');
    }
    else{
        console.log('i will go with free hand');
    }
}else{
    console.log('i will block my friend');
}
//task 2
const isRelative=true;
const tee=true;
const bisque=false;
if(isRelative){
    console.log('will you want to drink tee');
    if(tee){
        console.log('will you want to eat bisque');
        if(bisque){
            console.log('here are your snacks');
        }else{
            console.log('only tee is ready');
        }
    }else{
        console.log('watch movie with tv');
    }
}else{
    console.log('i will go to office');
}
//task 2 another formula
 const isrel=true;
 const takeTee=false;
 const food =true;
 if(isrel){
    console.log('did you want to take tee');
  if(takeTee){
    console.log('will the food');
    if(food){
        console.log('i will manege');
    }
    else{
        console.log('only  tee');
    }
  }else {
    console.log('watch tv');
  } 
  
 }
//task 3
const active=true;
const supscription=true;
if(active){
    if(supscription){
        console.log('premium features')
    }
    else{
        console.log('watch free version');
    }
}else{
    console.log('please download the app');
}
//task 4
const fridge=false;
const foodApp=false;
if(fridge){
    console.log('food warm ');
}else{
    console.log('check food delivery app');
    if(foodApp){
        console.log('order food');
    }
    else{
        console.log('today i am fasting');
    }
}
//task 5
const partyGuest=190;
const gift=false;
if(partyGuest>=100){
    console.log('gift carry');
    if(gift){
        console.log('lets party all night');
    }else{
        console.log('i will party myself');
    }
}
