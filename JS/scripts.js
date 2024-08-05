window.showSection = function (sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
};
document.querySelector('.icons[box-icon-name="shopping-bag"]').addEventListener('click', function () {
    document.querySelector('#shopping-cart').style.display = 'block';
});

