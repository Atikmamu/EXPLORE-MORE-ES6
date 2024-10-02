const products = [
    {id:1, name: 'lenovo', price: 65000},
    {id:2, name: 'dell', price: 45000},
    {id:3, name: 'lenovo', price: 90000},
    {id:4, name: 'mac', price: 150000},
];


// has some properties, method 

class Product{
    country = 'Bangladesh';
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`)
    }
}

const lenovo = new Product('Le le lenovo')
// console.log(lenovo)
// lenovo.speak('oba kita kau')


// class ar moddhe 2 ta jinish thakte pare 1 ta hosse properties ar arakta hosse method 

class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }

    lecture(){
        console.log('sir is teaching Math')
    }
}

const takdir = new Teacher('Takdir sir', 'physics');
console.log(takdir);


const murad = new Teacher('murad sir', 'English');
console.log(murad);