const num=[11,12,13,14,15,16,17,18,19];
const find=num.indexOf(17);
console.log(find);
//task 1
//includes diye kono man ase kina thakle true naile false
//index ar moddhe man dile se bole dibe koto num index na thakle bolbe -1
//task 2
const fruits=['apple','banana','mango','lichu']
if(fruits.includes('mango')){
    console.log('have mango')
}else{
    console.log('climb tree');
}
//task 3
const names=['babul','alif','choton'];
//const index=names.indexOf('babul');
//console.log(index);
console.log(names.indexOf('babul'));
//task 4
const friends=['rimon','rifat','rajib'];
const findIndex=friends.indexOf('rifat');
console.log(findIndex);
//task 5
const city=['dhaka','chadpur','narayangong'];
city.push('rajshahi');
const findCity=city.includes('RajShahi');
console.log(findCity);
//task 6
const program=['river','sonny','rain','winter'];
if(program.includes('rain')){
    console.log('i need umberalla');
}else{
    console.log('no rain no pain');
}
//task 7
const play=['football','cricket','badminton'];
//console.log(play.includes('vollyball'));
const playCheck=play.includes('football');
console.log(playCheck);