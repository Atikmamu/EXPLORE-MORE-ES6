// data access 
const data = [{id: 2, name: 'abul', address: 'kochu khet'}];

// console.log(data[0].address);

const products = {
    count: 50000,
    data: [
        { id: 1, name: 'lenevo laptop', price: 65000 },
        { id: 2, name: 'macbook', price: 150000},
    ]
}

// second product price 

// console.log(products.data[1].price);


const user = {
    id: 5001,
    name: 'shoriful Raj',
    address: {
        street: {
            first: '45/2 uttor side',
            second: 'poribag er goli',
            third: 'no dorai'
        },
        city: 'Dhaka'
    }
}

// console.log(user.address.street.second);


const user2 = {
    id: 5994,
    name: 'pori bibir majar',
    address: {
        city: 'chittagong',
        country: 'Bangladesh'
    }
}

console.log(user.address.street?.second);
console.log(user2.address.street?.second);

