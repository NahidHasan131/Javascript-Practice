//------------String Template--------------
// const fName = "Nahid"
// const lName = "Hasan"

//console.log(`Hello I am  ${fName} ${lName}`)



//---------------Arrow function-----------------

//single statement  func

//const single =(a,b)=>a+b;
//console.log(single(5,4));


//rest  operator
// const funcRest=(...rest)=>{
//     console.log(rest)
// }

// funcRest(1,2,3,5);



//arrow func with return
// const sum=(a,b,c)=>{
//     const add = a+b+c;
//     return add;
// }

// const res=sum(1,2,3);
// console.log(res);




// -----------Spread  Operator--------------------
// const num =[1,2,3,4,5,6]
// //console.log(...num)

// const newNum = [...num, 10, 20, 30]
// console.log(newNum)







// ---------Array method map filter

const products=[
    {name: "A31", Brand: "Samsung", Price: 19999, color: "BLue"},
    {name: "Y56", Brand: "Vivo", Price: 28999, color: "Black"},
    {name: "Y19", Brand: "Vivo", Price: 21999, color: "BLue"},
    {name: "Iphone13", Brand: "Apple", Price: 99999, color: "Black"},
    {name: "Redmi10", Brand: "Xiomi", Price: 15999, color: "Gold"}
]


// const result = products.map(item=>item.Price)
// console.log(result)


// // foreach
// products.forEach(mypro => console.log(mypro.Brand))


// Filter
// const result = products.filter(item => item.Price >= 50000)
// console.log(result)



// Find
// const result = products.find(item => item.name === 'Y56')
// console.log(result)




// --------------------Array distucturing-------------

// const friend = ["Hasan", "Sahid", "Firoz", "Delowar", "Hossain"]

// const[element1, element2, element3] = friend
// console.log(element2,element1)




// --------------------Object distucturing-------------

person = {
    name: "Nahid Hasna",
    Age: 26,
    Country: "Bangladesh",
    language: ["Bangla", "hindi", "English"]
}

const{name, Country, language} = person

console.log(language)








