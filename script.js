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

    // 🔽 Додаємо анімацію до списку
    const listItems = document.querySelectorAll('ul li');
    listItems.forEach((item, index) => {
        if (isInViewport(item)) {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 150); // затримка 150 мс для кожного
        }
    });
}

window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);
