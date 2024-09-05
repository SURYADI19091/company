// Function to toggle the sidebar visibility
function toggleNavbar() {
    var sidebar = document.getElementById('sidebar');
    // Add or remove the 'active' class to show or hide the sidebar
    sidebar.classList.toggle('active');
}

// Function to close the sidebar
function closeSidebar() {
    var sidebar = document.getElementById('sidebar');
    // Remove the 'active' class to hide the sidebar
    sidebar.classList.remove('active');
}

// Optional: Close the sidebar if a click occurs outside of it
document.addEventListener('click', function(event) {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('navbarToggle');
    
    // Check if the click was outside of the sidebar and toggle button
    if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});
