let body = document.body

let title = document.createElement('h1')
title.innerHTML = 'Todo List'
body.prepend(title)

let main = document.createElement('main')
main.className = 'container'
body.append(main)

let listBlock = document.createElement('div')
listBlock.className = 'listBlock'
main.append(listBlock)

let firstDiv = document.createElement('div')
listBlock.append(firstDiv)

let textIn = document.createElement('input')
textIn.className = 'textIn'
textIn.setAttribute('placeholder', 'todo')
textIn.setAttribute('type', 'text')
firstDiv.append(textIn)

let setDate = document.createElement('input')
setDate.className = 'setDate'
setDate.setAttribute('placeholder', 'todo')
setDate.setAttribute('type', 'date')
firstDiv.append(setDate)

let btn = document.createElement('button')
btn.id = 'addTodo'
btn.innerHTML = 'ADD'
firstDiv.append(btn)

let list = document.createElement('ul')
listBlock.append(list)

const maxTasks = 5

const addTodo = () => {

    if (textIn.value == false) {
        alert('Значение пусто!')
        const deleteParent = createLi.parentNode

        deleteParent.removeChild(createLi)

        textIn.value = ''
        setDate.value = ''

        return;
    }

    let createLi = document.createElement('li')
    createLi.className = 'taskItem'
    createLi.innerHTML = textIn.value + `<div class="addDate">${setDate.value}</div>`
    list.append(createLi)

    let imgContainer = document.createElement('div')
    imgContainer.className = 'container-img'
    createLi.append(imgContainer)

    let doneBtn = document.createElement('img')
    doneBtn.src = 'img/done_icon.png'

    let deleteBtn = document.createElement('img')
    deleteBtn.src = 'img/delete_icon.png'

    imgContainer.append(doneBtn)
    imgContainer.append(deleteBtn)

    const doneLi = () => {
        createLi.classList.toggle('done')
    }

    const deleteLi = () => {

        const parentElement = createLi.parentNode

        parentElement.removeChild(createLi)

        if (list.children.length < maxTasks) {
            btn.disabled = false
            return;
        }
    }

    doneBtn.addEventListener('click', doneLi)
    deleteBtn.addEventListener('click', deleteLi)

    textIn.value = ''
    setDate.value = ''

    if (list.children.length >= maxTasks) {
        alert(`Максимальное количество задач (5) достигнуто!`);
        btn.disabled = true
        return;
    }
}

btn.addEventListener('click', addTodo)