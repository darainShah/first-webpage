document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    const heroText = document.getElementById('hero-text');
    const welcomeMessage = document.getElementById('welcome-message');
    const texts = ["Welcome to my website!", "I am Darain Shahedi", "Explore my portfolio", "Get in touch with me"];
    const languages = ["Welcome", "Bienvenido", "Bienvenue", "Willkommen", "Benvenuto", "歓迎", "환영", "欢迎", "Добро пожаловать", "Bem-vindo", "स्वागत है", "خوش آمدید"];
    let textIndex = 0;
    let charIndex = 0;
    let languageIndex = 0;

    // Function to show welcome message in different languages
    function showWelcomeMessage() {
        welcomeMessage.textContent = languages[languageIndex];
        languageIndex = (languageIndex + 1) % languages.length;
        setTimeout(showWelcomeMessage, 100); // Reduced timeout to 100ms
    }

    // Function to hide the loading screen
    function hideLoadingScreen() {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        typeWriter(); // Start typewriter effect after loading screen
    }

    // Initialize the welcome message cycling
    showWelcomeMessage();

    // Hide the loading screen after a few seconds
    setTimeout(hideLoadingScreen, 3000);

    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight active nav link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Typewriter effect for hero text
    function typeWriter() {
        if (charIndex < texts[textIndex].length) {
            heroText.innerHTML += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(() => {
                heroText.innerHTML = '';
                charIndex = 0;
                textIndex = (textIndex + 1) % texts.length;
                typeWriter();
            }, 2000);
        }
    }
});
