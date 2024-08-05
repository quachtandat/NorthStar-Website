
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