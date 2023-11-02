const buttonsArray = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttonsArray.forEach((button) => {
    button.addEventListener('click', (e) => {
        body.style.backgroundColor = e.target.id
    })
})
