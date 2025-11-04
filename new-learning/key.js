//task 1
const player={
    name:'robiul',
    age:21,
    sports:'cricket',
    team:'bangladesh',

}
console.log(player.team);
//task 2
const laptop={
    brand:'lenevo',
    price:25000,
    harddisc:256,
    ram:'SDD',
    screenSize:15.5
}
console.log(laptop.screenSize);
//task 3
const favPlace={
    name:"Cox's Bazar ",
    distance:"400km",
    popularity:"high",

}
console.log(favPlace['popularity']);
//task 4
const phone={
    brand:'nokia',
    color:'black',
    price:5000
}
console.log(phone['price']);
//task 5
const library={
    name:'Public Library',
    location:'Dhaka',
    books:5000,

}
console.log(library.location);
//task 6
const movie={
    title:"inception",
    director:'Nolan',
    rating:9,

}
console.log(movie['rating']);
//task 7
const college={
    name:'ndc',
    established:1949,
    groups:['science','arts','commerce']
}
console.log(college.groups[1]);
//task 8
const family={
    father:{
        name:'sobahan',
        age:64,
        profession:'business'
    },
    mother:{
        name:'shirotaj',
        age:50,
        profession:'housewife'
    },

}
const totalAge=(family.mother.age+family.father.age);
console.log(totalAge);