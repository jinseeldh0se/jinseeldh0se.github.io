function NavBar(section) {
    // Hide all sections
    document.querySelectorAll('.Content .section').forEach(div => {
        div.classList.remove('active');
        div.style.animation = 'fadeOut 0.5s';
        setTimeout(() => {
            div.style.display = 'none';
        }, 500);
    });

    // Show the selected section
    setTimeout(() => {
        const selectedSection = document.querySelector(`.${section}`);
        selectedSection.style.display = 'flex';
        selectedSection.classList.add('active');
        selectedSection.style.animation = 'fadeIn 0.5s';
    }, 500);

    // Show or hide the photo based on the section
    const photoDiv = document.querySelector('.Photo');
    if (section === 'home') {
        setTimeout(() => {
            photoDiv.style.display = 'block';
            photoDiv.classList.remove('hide');
            photoDiv.classList.add('show');
        }, 500);
    } else {
        photoDiv.classList.remove('show');
        photoDiv.classList.add('hide');
        setTimeout(() => {
            photoDiv.style.display = 'none';
        }, 500);
    }
    document.querySelectorAll('.nav-bar h3').forEach(navItem => {
        navItem.classList.remove('active');
    });

    // Add 'active' class to the clicked nav item with a slight delay for the transition effect
    setTimeout(() => {
        document.querySelector(`.${section.charAt(0).toUpperCase() + section.slice(1)}`).classList.add('active');
    }, 100);

    document.addEventListener('keydown', (event) => {
        let activeNavItem = document.querySelector('.nav-bar h3.active');
    
        // Handle left arrow key press
        if (event.key === 'ArrowLeft') {
            let prevNavItem = activeNavItem.previousElementSibling;
            if (prevNavItem) {
                NavBar(prevNavItem.classList[0].toLowerCase());
            }
        }
    
        // Handle right arrow key press
        if (event.key === 'ArrowRight') {
            let nextNavItem = activeNavItem.nextElementSibling;
            if (nextNavItem) {
                NavBar(nextNavItem.classList[0].toLowerCase());
            }
        }
    });
}

