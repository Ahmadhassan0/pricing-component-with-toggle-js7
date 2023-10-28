const toggleBtn = document.querySelector('.toggle__btn');
const gridBox = document.querySelector('.pricing__grid__box');

toggleBtn.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('active');
    gridBox.classList.toggle('active');
})