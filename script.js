document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // 2. Navbar Background Change on Scroll
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = '#ffffff';
                navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
            }
        });

        // 3. Add to Cart Alert Logic
        const cartButtons = document.querySelectorAll('.add-to-cart');
        cartButtons.forEach(button => {
            button.addEventListener('click', () => {
                const productName = button.parentElement.querySelector('h3').innerText;
                alert(productName + " has been added to your cart!");
                
                // Tech touch: Change button text temporarily
                button.innerText = "Added ✓";
                button.style.background = "palevioletred";
                setTimeout(() => {
                    button.innerText = "Add to Cart";
                    button.style.background = "white";
                }, 2000);
            });
        });

        // 4. Form Submission Mockup
        const loginForm = document.getElementById('loginForm');
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Thank you! Your message has been sent to Veloura Scents.");
            loginForm.reset();
        });