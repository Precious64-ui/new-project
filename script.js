document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle Logic
    const menuBtn = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    if (menuBtn && navList) {
        menuBtn.onclick = () => {
            navList.classList.toggle('active');
        };

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
            });
        });
    }

    // 2. Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Navbar Background Change on Scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = '#ffffff';
            navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
        } else {
            // Optional: Reset if scrolled back to top
            navbar.style.boxShadow = 'none';
        }
    });

    // 4. Add to Cart Logic
    const cartButtons = document.querySelectorAll('.products-images button'); // Matches your CSS class
    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.parentElement.querySelector('h3').innerText;
            alert(productName + " has been added to your cart!");
            
            const originalText = button.innerText;
            button.innerText = "Added ✓";
            button.style.background = "palevioletred";
            button.style.color = "white";

            setTimeout(() => {
                button.innerText = originalText;
                button.style.background = "white";
                button.style.color = "black";
            }, 2000);
        });
    });

    // 5. Form Submission Mockup
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Thank you! Your message has been sent to Veloura Scents.");
            loginForm.reset();
        });
    }
});
