let title = document.getElementById('title')
title.style.color = 'orange'
title.style.fontSize = '5rem'

let obj = {
    background: 'black',
    fontSize: '30px',
    color: '#efefef'
}

let ul_list = document.getElementById('list');

[...ul_list.children].forEach(li => {
    Object.assign(li.style, obj)
})

// Object.assign(ul_list.style, obj)