function animateScroll() {
    const dataAnime = document.querySelectorAll('[data-anime]');
    const windowTop = window.innerHeight * 0.5;

    dataAnime.forEach((e) => {
        if (e.getBoundingClientRect().top - windowTop < 120) {
            e.classList.add('animate')
        } else {
            e.classList.remove('animate')
        }
    })
}