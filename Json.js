// const person = {
//     name: "Nahid Hasna",
//     age: 26,
//     language: ['Bengali', 'English', 'Hindi'],
//     family: {
//         fatherName: "Robiul Islam",
//         brotherName: "Junaid Hasan"
//     }
// }
// console.log(person)

// //object to json
// const jsonData = JSON.stringify(person)
// console.log(jsonData)


// //json to object
// const plainData = JSON.parse(jsonData)
// console.log(plainData)




//Fetch

// fetch("url")
// .then(res => res.json())
// .then(data=>console.log(""))




// const person = {
//     name: "Nahid Hasna",
//     age: 26,
//     language: ['Bengali', 'English', 'Hindi'],
//     family: {
//         fatherName: "Robiul Islam",
//         brotherName: "Junaid Hasan"
//     }
// }

//keys
// const keys = Object.keys(person)
// console.log(keys)


// Values
// const Values = Object.values(person)
// console.log(Values)


//array add using spread operator

const products=[
    {name: "A31", Brand: "Samsung", Price: 19999, color: "BLue"},
    {name: "Y56", Brand: "Vivo", Price: 28999, color: "Black"},
    {name: "Y19", Brand: "Vivo", Price: 21999, color: "BLue"},
    {name: "Iphone13", Brand: "Apple", Price: 99999, color: "Black"},
    {name: "Redmi10", Brand: "Xiomi", Price: 15999, color: "Gold"}
]

const newData = {name: "M20", Brand: "Walton", Price: 10000, color: "Dark"}

// const newArr = [...products, newData]
// console.log(newArr)

//remove data and make new array

const remainingProd = products.filter(pro=>pro.Brand != "Apple")
console.log(remainingProd)

const  newArr2 =  [...remainingProd, newData]
console.log(newArr2)