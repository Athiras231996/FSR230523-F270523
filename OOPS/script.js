Person={
    fName:"John",
    lName:"Doe",
    Age:30,
     hasDivingLicence:true,
}
console.log(Person);
console.log(Person.lName);
// console.log(Person.fName+" "+Person.lName);

Person1={
    fname:"John",
    lName:"Smith",
    Age:60
}


console.log(Person.Age=35);

var btn=document.getElementById("btn");
 function onBtnClick(e){
console.log(e);
 }
 console.log(console);


btn.addEventListener("click",onBtnClick)

//Procedural programming language
//=======================
//Object Oriented Programming
Person={
    fName:"John",
    lName:"Doe",
    Age:30,
     hasDivingLicence:true,
     printName:function(){
        console.log(this.fName+" "+this.lName);
     }
}
console.log(Person);
console.log(Person.lName);
// console.log(Person.fName+" "+Person.lName);
console.log(Person.printName());

console.log(Person.Age=35);

function PersonDet(fName,lName,Age){// constructor function
   this.fName=fName,
   this.lName=lName,
   this.Age=Age ,
   this.setAge=function(Age){
    this.Age=Age
   }
   this.getAge=function(){
    return this.Age
   }
   this.setfName=function(fName){
    this.fName=fName
   }
   this.getfName=function(){
    return this.fName
   }
}

var person=new PersonDet("Ann","Tom",45);// Object instantiation
console.log(person);

var person1=new PersonDet("Bella","John",34);
console.log(person1)


console.log(person.getAge())
person.setAge(50);//Setter method
console.log(person.getAge())//Getter method


class PersonDetails{
    constructor(fName,lName,Age){ //constructor function
        this.fName=fName,
        this.lName=lName,
        this.Age=Age
    }
    getAge(){
        return this.Age
    }
    setAge(Age){
        this.Age=Age
    }
    setfName(fName){
        this.fName=fName
    }
    getfName(){
        return this.fName
    }
}
var person2=new PersonDetails("Athira","Suresh",26);//object instantiation
console.log(person2)
person2.setfName("Alice");
console.log(person2);
person2.setAge(30)
console.log(person2)


car={
    name:"BMW",
    makeYear:2023,
    isUsePetrol:true,
    printYear:function(){
        console.log(this.age)
    }

}
console.log(car.printYear());

//inheritance

class Vechicle{
    constructor(fuelAmount,capacity){
        this.fuelAmount=fuelAmount,
        this.capacity=capacity

    }
    setCapacity(capacity){
        this.capacity=capacity
    }
    getCapacity(){
        return this.capacity
    }
    setFuelAmount(fuelAmount){
        this.fuelAmount=fuelAmount
    }
    getFuelAmount(){
        return this.fuelAmount
    }
}
class Bus extends Vechicle{
    constructor(capacity,hasPetrol){
        super(capacity);
        this.hasPetrol=hasPetrol
//super(capacity);
    }
}
var vechicle=new Vechicle(100,100)
var bus=new Bus(150,true);
console.log(bus.getCapacity())



// var imgDiv=document.getElementById('imgDiv');
// function onImgClick(e){
// imgDiv.innerHTML=e.target.src
// }

//function onImgClick(e){
//left.innerHtml=e.target.src
//}
//img.addeventListener("click", onImgClick)














