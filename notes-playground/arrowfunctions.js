// var square=(x)=>{
//     var result=x*x;
//     return result;
// }

//OR

var square=x=>x*x;  //You ca omit paranthesis if single argument

console.log(`Square : ${square(3)}`);

var user={

    name:'Bucks',
    sayHi : ()=>{
        console.log(arguments);
        console.log(`Hi this is ${this.name} here`);  //This keyword is not bindable inside arrow func so we get undefined for name
    },
    sayHiAlt(){
        console.log(arguments);
        console.log(`Hi this is ${this.name} here`); //As this is normal func this keyword works as expected
    }
};

user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);