function createElament(tagName, className, innerHTML) {
    let tag = document.createElement(tagName)
    tag.className = className || ''
    tag.innerHTML = innerHTML || ''

    return tag
}

function append(parent, children) {
    children.forEach((child) => {
        parent.appendChild(child)
    })
}

let li = createElament('li', 'list-group-item', 'Four')
let ul_list = document.getElementById('list')
ul_list.appendChild(li)

// let p1 = createElament('p', 'lead', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime perspiciatis nulla nam repellendus vitae adipisci')

// let div = createElament('div', 'dead')
// append(div, [p1])

// ul_list.insertAdjacentElement('beforeend', div)

let updateItem = ul_list.firstElementChild

setTimeout(() => {
    updateItem.innerHTML = updateItem.innerHTML + '(I am one)'
    updateItem.classList.add('text-success')
    updateItem.style.background = 'black'
}, 4000)

let deleteItem = ul_list.lastChild
setTimeout(() => {
    deleteItem.remove()
}, 3000)