document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.close-btn');

    menuToggle.addEventListener('click', () => {
        sidebar.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        sidebar.style.display = 'none';
    });

    document.addEventListener('click', (e) => {
        if (e.target !== sidebar && e.target !== menuToggle && !sidebar.contains(e.target)) {
            sidebar.style.display = 'none';
        }
    });
});
