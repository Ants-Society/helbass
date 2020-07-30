const button = document.querySelector('.brand__button')
const contact = document.querySelector('.contact')

button.addEventListener('click', () => contact.classList.toggle('open'))
