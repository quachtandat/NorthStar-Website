// window.showSection = function (sectionId) {
//     document.querySelectorAll('.section').forEach(section => {
//         section.classList.remove('active');
//     });
//     document.getElementById(sectionId).classList.add('active');
// };

// document.querySelector('.icons[box-icon-name="shopping-bag"]').addEventListener('click', function () {
//     document.querySelector('#shopping-cart').style.display = 'block';
// });


// document.addEventListener('DOMContentLoaded', function () {
//     const hash = window.location.hash.substring(1);
//     if (hash) {
//         showSection(hash);
//     }
//     else {
//         showSection('home');
//     }
// })



function showSection(sectionId) {
    // Ẩn tất cả các section
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active'); // Loại bỏ lớp active
    });

    // Hiển thị section được chọn
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active'); // Thêm lớp active cho section được chọn

    history.pushState(null, null, '#' + sectionId);
}

// document.addEventListener('DOMContentLoaded', function () {
//     const hash = window.location.hash.substring(1);
//     if (hash) {
//         showSection(hash);
//     } else {
//         showSection('home'); // Hiển thị phần Men mặc định
//     }
// }); 

function showmess(sectionId) {
    // Ẩn tất cả các section
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active'); // Loại bỏ lớp active
    });

    // Hiển thị section được chọn
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active'); // Thêm lớp active cho section được chọn

    history.pushState(null, null, '#' + sectionId);
    setTimeout(function() {  
        location.reload();  
    }, 3000);  
}