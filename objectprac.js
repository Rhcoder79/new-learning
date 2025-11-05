//task 1
const book={
    name:'paradoxical sajid',
    writer:'arif ajad',
    price:120

}
const proper=Object.keys(book);
const value=Object.values(book);
//const ent=Object.entries(book);
console.log(proper,value);
//console.log(ent);

//task 2
const article = { 
    title: "Learning JS",
    category: "Programming"
     };

    const element=Object.keys(article);
    const bool=element.includes("author");
    console.log(bool);
    //differ way
    if('titles' in article){
        console.log('right');
    }else{
        console.log('wrong');
    } 
    //differ way 
    if(article.hasOwnProperty('title')){
        console.log('have');
    }else{
        console.log('not');
    }
//task 3
const laptop = { brand: "Dell", model: "Inspiron", price: 45000 };

for(const key in laptop){
    const value=laptop[key];
    console.log(key,':',laptop[key]);
}
//task 4
const phone = { brand: "Samsung", model: "Galaxy S21", price:86000};
const objet=Object.keys(phone);
console.log(objet);
for(const man of objet){
    const value=phone[man];
   // console.log(man,phone[man]);
    console.log(man,value);
}
//task 5
const bike={
    brand:'Hero',
    price:130000,
    model:'splendor'
};
const  bikeMan=Object.values(bike);
console.log(bikeMan);
//TASK 6
const books = { book1: "Harry Potter", book2: "The Hobbit", book3: "Game of Thrones" };
for(let element in books){
    const bookName=books[element];
    console.log(bookName);
}
// task 7
let sum=0;
const numbers = { a: 10, b: 20, c: 30,d:40};
for(let num in numbers ){
    let numMan=numbers[num];
     sum=sum+numMan;
}console.log(sum);
//task 8
const player={
    name:'messi',
    team:'argentina',
     goal:91
}
const achivement=Object.values(player);
console.log(achivement);
//task 9
const building={
    floors:11,
    address:{street :'Main Road', city :'Dhaka'},
     type:'commercial'
    }
for(const info in building){
   // console.log(info,building[info]);
   const value=building[info];
   console.log(info,value);
}
