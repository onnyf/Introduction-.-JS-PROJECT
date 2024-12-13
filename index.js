// javascript object
var staff ={
    fullName: 'EHI OLUWAGBENGA',
    job: 'Tech support',
    age: undefined,
    disability: null,
    wagePerDay: 20000,
    marriedStatus: true,
    phoneNumber: 2348157198212,
    hobbies: ['coding', 'cooking', 'traveling',],
    address:{
        number: 17,
        street: 'alagomeji',
        city: 'yaba',
        state: 'lagos',
        country: 'Nigeria',
    }
}


var staff2 ={
    fullName: 'Olufemi Oni',
    job: 'Web Developer',
    age: undefined,
    disability: null,
    wagePerDay: 2000,
    numberOfDaypresent: 4,
    salary: function(){
        return this.wagePerDay*this.numberOfDaypresent
    },
    marriedStatus: true,
    phoneNumber: 2348157198212,
    hobbies: ['coding', 'cooking', 'traveling', 'Basketball', 'football'],
    address:{
        number: 12,
        street: 'Olagbaiye',
        city: 'Isolo',
        state: 'Lagos',
        country: 'Nigeria',
    }
}
staff2.marriedStatus = false,
console.log(staff2)

console.log(staff2.address.city);


console.log(staff2.hobbies[4]);

console.log(staff2.salary())



function merrychrismas(){
return console.log('merrychrismas')
}
merrychrismas()

function add (x,y){
    var sum = x + y
    return console.log(sum)
}
add(10,25)
add(50,120)

function Areaofcircle(r){
    var area = Math.PI * r**2
return console.log(area)
}
Areaofcircle(10)


function parameters(a,b,c){
    var parameters = a + b + c
    return console.log(parameters)

}
add(5,5,5)



function salute(name){
    

}


// var score = 68
// switch(score){
//     case score <= 40:
//         console.log('your grade is D');
//         break;
//         case score >= 41 && score <= 50:
//        console.log('your grade is C');
//       break;
//       case score >=51 && score <= 70:
//         console.log('your grade is B');
// break;
// default:
//     console.log('your grade is A');

var score = 65;

if (score <= 40) {
    console.log('Your grade is D');
} else if (score >= 41 && score <= 50) {
    console.log('Your grade is C');
} else if (score >= 51 && score <= 70) {
    console.log('Your grade is B');
} else {
    console.log('Your grade is A');
}




