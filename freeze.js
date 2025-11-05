//step 1 delete
const book={
    name:'paradoxical sajid',
    writer:'arif ajad',
    price:120

}
delete book.price;
console.log(book);
//step 2 freeze 
//by using freeze you can't delete, change or add any property
const laptop = { brand: "Dell", model: "Inspiron", price:46000};
console.log(laptop);
const notChange=Object.freeze(laptop);
laptop.price=40000;
delete laptop.model;
laptop.NewModel='13 gen';
console.log(laptop);
//step 3 seal 
//by using seal you can change the value of property but can't add or delete any property
const player={
    name:'messi',
    team:'argentina',
     goal:91
}
const valueChange=Object.seal(player);
console.log(player);
player.goal=95; //allowed to change the value
player.cup=2; // not allow new property
delete player.team;// not allowed to  delete the property
console.log(player);
