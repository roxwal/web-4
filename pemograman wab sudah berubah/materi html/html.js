const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

function toggleSidebar() {
    sidebar.classList.toggle('close'); // Menambahkan atau menghapus kelas "close"
    toggleButton.classList.toggle('rotate'); // Menambahkan atau menghapus rotasi pada tombol (opsional)
}

function toggleSubMenu(button) {
    button.nextElementSibling.classList.toggle('show'); // Toggle submenu
    // Jika sidebar tertutup dan sub-menu diklik, buka sidebar
    if (sidebar.classList.contains('close')) {
        sidebar.classList.remove('close');
        toggleButton.classList.remove('rotate');
    }
}

function goBack() {
    window.location.replace('/projek uts/projek uts/index.html');
    }
