 // class diye jei object ghula banano hobe 
class Person{
    constructor(name, age){
        // this diye class ar moddhe jei property ghulo ache sei takhe set kora hoi 
       
        this.name = name;
        this.age = age;
    }
    // method 
    sleep(){
        console.log(`Sleeping now ${this.name}`) // current jei tar opor use kortasi sei takhe bujhai 
    }
    activity(){
        this.sleep();
    }
}

// class ka object korta new keyword use kori 
const kodom = new Person('kodom Ali', 21)
console.log(kodom);
kodom.sleep();
const badam = new Person('kacha badam', 23)
