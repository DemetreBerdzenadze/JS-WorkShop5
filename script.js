// TASK 1

let jsDiv = document.getElementById('js')

let wraper = document.createElement('div')

let img = document.createElement('img')

let title = document.createElement('h2')

img.src = "https://images.app.goo.gl/DvaPyWEyENdmJmgy9" // ?????

img.alt = 'christmas'

img.style.width = '700px'

title.textContent = 'image title'

title.classList.add('title')

title.style.fontSize = '30px'

title.style.color = 'red'

jsDiv.appendChild(wraper)

wraper.appendChild(img)

wraper.appendChild(title)



// TASK 2 PART 1

document.write('TASK 2 PART 1')

let textDiv = document.createElement('p')

document.boady.children[1].textContent = 'hello!';

document.boady.children[2].textContent = 'hello!';

document.boady.children[3].textContent = 'hello!';

// ???????????????


// TASK 2 PART 2

let linkGoogl = document.createElement('a') 

linkGoogl.textContent = 'link to google'

linkGoogl.href = 'https://google.com/'

linkGoogl.classList.add('link')

linkGoogl.classList.replace('link', 'newClass')

let box = document.querySelector('box')

box.appendChild(link)

// ???????????





