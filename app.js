if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('service worker registered'))
    .catch(err => console.log('service worker not registered', err));
}

const button = document.querySelector('.brand__button')
const contact = document.querySelector('.contact')

button.addEventListener('click', () => contact.classList.toggle('open'))
