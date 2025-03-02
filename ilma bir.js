// ilma_bir.js
function showTab(tabId) {
    // Get all content elements
    const contents = document.querySelectorAll('.content');

    // Loop through content elements and hide them
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Get the tab button elements
    const tabButtons = document.querySelectorAll('.tab_btn');

    // Loop through tab buttons and remove active class
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });


    // Show the selected tab
    const tabToShow = document.getElementById(tabId);
    if (tabToShow) {
        tabToShow.classList.add('active');
    }

    // Add active class to the clicked button
    const activeButton = document.querySelector(`.tab_btn[onclick="showTab('${tabId}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');  //add active class to button.  You'll need to style this in CSS.
    }
}

//Show the home tab by default when the page loads
document.addEventListener('DOMContentLoaded', function() {
    showTab('home');
});


let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;
    document.querySelector(".slider").style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);


