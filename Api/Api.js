// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res => res.json())
// .then(data => console.log(data))

//data fetch 
// const fetchData = ()=>{
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }


// load data and display
const loadData = ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data => {
        displayData(data)
    })
}

const displayData = (users)=>{
    // console.log(users)
    // for(let i = 0; i<users.length; i++){
    //     console.log(users)
    // }

    // for(const user of users){
    //     console.log(user)
    // }

    const userContainer = document.getElementById('userContainer');

    for(const user of users){
        console.log(user)
        const div = document.createElement("div");
        div.innerHTML = `
            <p>${user.id}</p>
            <h4>${user.name}</h4>
            <h4>${user.email}</h4>
            <h4>${user.phone}</h4>
        `

        userContainer.appendChild(div);
    }
}

loadData();




















