// let li = document.createElement('li')
// li.className = 'list-group-item'
// li.innerHTML = 'Four'
// li.setAttribute('title', 'I am Four')
// // console.log(li);

// let ul_list = document.getElementById('list')
// ul_list.appendChild(li)

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

let p1 = createElament('p', 'lead', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime perspiciatis nulla nam repellendus vitae adipisci')

let div = createElament('div')
append(div, [p1])

let cont = document.getElementById('cont')
cont.appendChild(div)