const profile={
    name:'rahim',
    age:28,
    city:"dhaka"
};

//console.log(Object.keys(profile));
//console.log(Object.values(profile));
const proper=Object.keys(profile); //step one
//const man=Object.values(profile);
bool=proper.includes('age');
console.log(proper,bool);
//console.log(man);
//step 2 property check 
 if('age' in profile){
    console.log('well');
 }else{
    console.log('very bad');
 }
// step 3 property check kore 
if(profile.hasOwnProperty('city')){
    console.log('very nice city');
}else{
    console.log('not have a city');
}
//step 4 value check
if(profile.name==='rahims'){
    console.log('correct');
}else{
    console.log('wrong');
}
//step 5 couple couple 
const jora=Object.entries(profile);
console.log(jora);
//step 6 for in //most commonly use 
//array element ar jonno for of
//object element ar jonno for in
for(const pa in profile){
    //console.log(pa); //upore asbe
   // console.log(profile[pa]); // niche asbe
   const paman=profile[pa];
    console.log(pa,paman); //pasapashi output dibe
}
// step 7 
/*for in আসার আগে একটা অবজেক্টের সব প্রোপার্টির ওপরে লুপ চালানোর একটা কমন সিস্টেম ছিল Object.keys দিয়ে সব key-গুলাকে নিয়ে আসা।
   এরপর একটা অ্যারের ওপরে যেভাবে ফর লুপ বা for of চালানো যায়, সেটা চালিয়ে দেওয়া।
*/
for(const prop of proper){
    console.log(prop,profile[prop],'this way use before came to  for in');
}