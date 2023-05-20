const selectWeek = document.getElementById('select-week');
const weekSelector = document.querySelector('.week-selector');

selectWeek.addEventListener('change', () => {
    if (selectWeek.value !== '') {
        weekSelector.classList.add('visible');
    } else {
        weekSelector.classList.remove('visible');
    }
});
