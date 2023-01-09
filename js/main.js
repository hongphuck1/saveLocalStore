const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const Ho = $('#lastname')
const Ten = $('#firstname')
const submit = $('#submit')
const gui = $('.todo-add')
const todoList = $('.todo-list')
const todoItems = $$('.todo-item')
const deleteBtn = $('#delete')



function addTodoElement() {


    submit.addEventListener('click', function (e) {
        const last = Ho.value.trim()
        const first = Ten.value.trim()

        if (last !== '' && first !== '') {

            render({
                last: last,
                first: first,
            })

            saveTodolist()

            Ho.value = ''
            Ten.value = ''
        }


    })



}




function render(options) {

    const li = document.createElement('li')
    li.classList.add('todo-item')

    // ${options.last}
    // ${options.first}
    li.innerHTML = `
                <div class="todo-last-name">${options.last}</div> 
                <div class="todo-first-name">${options.first}</div>
                <i id="delete" class="fa-solid fa-trash-can"></i>
    `

    console.log(li);
    li.addEventListener('click', function (e) {
        if (e.target.closest('#delete')) {
            li.remove()
            saveTodolist()
        }
    })



    todoList.appendChild(li)
}


function saveTodolist() {
    const todoLists = $$('.todo-item')
    const todoStorage = []



    todoLists.forEach(function (item) {

        const last = item.querySelector('.todo-last-name').innerText
        const first = item.querySelector('.todo-first-name').innerText

        todoStorage.push({
            last,
            first
        })

    })

    localStorage.setItem('todoLists', JSON.stringify(todoStorage))

    //     localStorage.setItem('todolist', JSON.stringify(todoStorage))

}

function getLocalStorage() {
    let data = JSON.parse(localStorage.getItem('todoLists'))

    data.forEach(function (item) {
        render(item)
    })
}

addTodoElement()
getLocalStorage()


// var itemValues = $$('.todo-item')
// var btnDelete = $('.todo-item i')

// var input = $('.todo-input')
// var submit = $('.btn')
// var form = $('.todo-add')
// var todos = $('.todo-list')


// form.addEventListener('submit', function (e) {
//     e.preventDefault()
//     let value = input.value.trim()

//     if (value) {
//         addTodoElement({
//             text: value,
//             // status: 'active'
//         })
//         saveTodolist()

//     }

//     input.value = ''

// })

// function addTodoElement(options) {


//     var li = document.createElement('li')
//     li.classList.add('todo-item')
//     li.innerHTML = `
//                 <span class="todo-item__name ">${options.text}</span>
//                 <i class="fa-solid fa-trash"></i>
//     `

//     if (options.status === 'todo-item active') {
//         li.setAttribute('class', 'todo-item active')
//     }

//     li.addEventListener('click', function (e) {

//         if (e.target.closest('.todo-item span')) {
//             this.classList.toggle('active');
//             saveTodolist()
//         }

//     })

//     li.querySelector('i').addEventListener('click', function (e) {
//         this.parentElement.remove()
//         saveTodolist()
//     })

//     todos.appendChild(li)
// }

// function saveTodolist() {

//     let todoList = document.querySelectorAll('li')
//     let todoStorage = []
//     todoList.forEach(function (item) {

//         let text = item.querySelector('span').innerText
//         let status = item.getAttribute('class')

//         todoStorage.push(
//             {
//                 text,
//                 status
//             }
//         )
//     })

//     localStorage.setItem('todolist', JSON.stringify(todoStorage))
// }

// function loadTodolist() {
//     let data = JSON.parse(localStorage.getItem('todolist'))
//     data.forEach(function (item) {
//         addTodoElement(item)
//     })
// }

// loadTodolist()