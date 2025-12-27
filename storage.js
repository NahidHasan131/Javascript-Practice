
const addToStorage = ()=>{
    const id = document.getElementById("StId").value;
    const name = document.getElementById("name").value;

    // localStorage.setItem("Name", name)

    const data = {id, name}
    localStorage.setItem(id, JSON.stringify(data))
}

const storedItem = localStorage.getItem("131")
console.log(JSON.parse(storedItem))

const handleClear = ()=>{
    localStorage.clear()
}
