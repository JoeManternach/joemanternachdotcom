function show_content(section) {
    // Hide all content sectiosn
    let sections = document.querySelector(".content-section");
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    document.getElementById(section).style.display = "block";
}