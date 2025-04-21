function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight);
}

function handleScroll() {
    const memes = document.querySelectorAll('.meme');
    memes.forEach(meme => {
        if (isInViewport(meme)) {
            meme.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);
