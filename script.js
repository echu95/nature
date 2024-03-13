document.addEventListener("DOMContentLoaded", function() {
    const hero = document.querySelector(".hero");
    hero.style.opacity = 0;
  
    setTimeout(() => {
      hero.style.transition = "opacity 1s";
      hero.style.opacity = 1;
    }, 500);
  });
  


  // JavaScript for animation
document.addEventListener('DOMContentLoaded', function () {
    const missionContent = document.querySelector('.mission-content');

    function animateMissionContent() {
        missionContent.classList.add('animate');
    }

    // Check if the mission content is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Trigger animation when mission content is in viewport
    function handleScroll() {
        if (isElementInViewport(missionContent)) {
            animateMissionContent();
            // Remove event listener to prevent unnecessary animations
            window.removeEventListener('scroll', handleScroll);
        }
    }

    // Initial check on page load
    handleScroll();

    // Re-check on scroll
    window.addEventListener('scroll', handleScroll);
});



document.addEventListener('DOMContentLoaded', function () {
    const issues = document.querySelectorAll('.issue');

    function animateIssues() {
        issues.forEach(issue => {
            if (isElementInViewport(issue)) {
                issue.classList.add('animated');
            }
        });
    }

    // Check if an element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Trigger animation when issues come into view
    function handleScroll() {
        animateIssues();
    }

    // Initial check on page load
    handleScroll();

    // Re-check on scroll
    window.addEventListener('scroll', handleScroll);
});


document.addEventListener('DOMContentLoaded', function () {
    const animalItems = document.querySelectorAll('.animal-item');

    function animateAnimalItems() {
        animalItems.forEach(item => {
            if (isElementInViewport(item)) {
                item.classList.add('animated');
            }
        });
    }

    // Check if an element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Trigger animation when animal items come into view
    function handleScroll() {
        animateAnimalItems();
    }

    // Initial check on page load
    handleScroll();

    // Re-check on scroll
    window.addEventListener('scroll', handleScroll);
});



document.getElementById('volunteerForm').addEventListener('submit', function(event) {
    var fullname = document.getElementById('fullname').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var dob = document.getElementById('dob').value.trim();
    var address = document.getElementById('address').value.trim();
    var availability = document.getElementById('availability').value;
    var skills = document.getElementById('skills').value.trim();
    var motivation = document.getElementById('motivation').value.trim();

    if (!fullname || !email || !phone || !dob || !address || !availability || !skills || !motivation) {
        alert('Please fill out all required fields.');
        event.preventDefault();
    }
});


