const profile={
    name:'rahim',
    age:28,
    city:"dhaka"
};
for(const key in profile){
    const value=profile[key];
    console.log(key,value);

}
//task 1
const book={
    name:'economy',
    writer:'rh',
    price:120,
    located:'badda'
}
// console.log(Object.values(book).includes('Rh'));
const pro=Object.keys(book);
const know=pro.includes('writer');
console.log(know);