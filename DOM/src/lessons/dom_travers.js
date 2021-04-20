// let list = document.getElementById('list')
// console.log(list);

// console.log(list.previousElementSibling);

// -------loop throw html collection
let listItem = document.getElementsByTagName('li')
let listItems = [...listItem]
// console.log(listItems);

listItems.forEach((li, ind) => {
    let text = li.innerHTML
    li.innerHTML = (`(${ind + 1}) ${text}`)
});