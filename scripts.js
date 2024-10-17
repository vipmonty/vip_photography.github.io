// JavaScript for showing and hiding sections based on menu clicks
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        const targetSection = document.getElementById(this.getAttribute('data-target'));
        
        // Hide all sections
        document.querySelectorAll('main section').forEach(section => {
            section.style.display = 'none';  // Hide each section
        });
        
        // Show the target section
        if (targetSection) {
            targetSection.style.display = 'block';  // Only show the clicked section
        }
    });
});

