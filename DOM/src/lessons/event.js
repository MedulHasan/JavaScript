let btn = document.getElementById('btn')

let ul_item = document.getElementById('list')

btn.addEventListener('click', function (e) {
    let lastItem = ul_item.lastElementChild.cloneNode(true)
    lastItem.innerHTML = `New Item`
    ul_item.appendChild(lastItem)
});

// Event Delegation Problem
// [...ul_item.children].forEach(li => {
//     li.onclick = function (e) {
//         e.target.remove()
//     }
// })

ul_item.addEventListener('click', function (e) {
    if (this.contains(e.target)) {
        e.target.remove()
    }
})

let box = document.getElementById('box')

box.addEventListener('mousemove', function (e) {
    document.getElementById('x-value').innerHTML = e.offsetX
    document.getElementById('y-value').innerHTML = e.offsetY
})