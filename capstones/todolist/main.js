//GETS TODOS FROM DATABASE

function getData() {
    axios.get("https://api.vschool.io/emioneal/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}
        
// LISTS TODOS ON THE PAGE

function listData(data) {
    clearList()

    for (let i = 0; i < data.length; i++) {
        const img = document.createElement('img')
        img.src = data[i].imgUrl    
        const h2 = document.createElement('h2')
        h2.textContent = data[i].title
        if (data[i].completed === true) {
            h2.style.setProperty("text-decoration", "line-through")
        }

        const h4 = document.createElement('h4')
        h4.textContent = data[i].description

        const hr = document.createElement('hr')
        
        document.getElementById('todo-list').appendChild(img)
        document.getElementById('todo-list').appendChild(h2)
        document.getElementById('todo-list').appendChild(h4)
        document.getElementById('todo-list').appendChild(hr)

    }
}

function clearList() {
    const el = document.getElementById('todo-list')
    while (el.firstChild) {
        el.removeChild(el.firstChild)
    }
}

getData()

//POST DATA to DATABASE

const todoForm = document.todoForm

todoForm.addEventListener("submit", function(e) {
    e.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.desc.value,
        imgUrl: todoForm.imgURL.value
    }

    todoForm.title.value = ""
    todoForm.desc.value = ""
    todoForm.imgURL.value = ""

    axios.post("https://api.vschool.io/emioneal/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
    
})