// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json())
//   .then(data => console.log(data))


// //Normal function
// async function loadData(){
//     const res = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await res.json()
//     console.log(data)
// }
// loadData()



//Arrow function
const loadData = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
}
loadData();