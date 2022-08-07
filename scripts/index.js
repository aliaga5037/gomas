document.querySelector('.backdrop').addEventListener('click', e => {
    document.getElementById('check').checked = false
})

window.addEventListener('scroll', (e) => {
    const header = document.querySelector('header');
    if (window.pageYOffset >= 150) {
        if (!header.classList.contains('header--sticky'))
            header.classList.add('header--sticky')
    } else {
        if (header.classList.contains('header--sticky'))
            header.classList.remove('header--sticky')
    }
})