// ===== Typing Effect =====
const typingText = document.querySelector('.typing-text');
const text = 'Mobile Developer';
let index = 0;

function type() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

// Start typing animation after page load
setTimeout(type, 500);

// ===== Scroll Reveal Animation =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Update active nav link based on visible section
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// ===== Smooth Scroll Navigation =====
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// ===== Back to Top Button =====
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Parallax Effect for Floating Shapes =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.floating-shape');
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.1;
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===== Add Animation Delay to Skill Cards =====
document.addEventListener('DOMContentLoaded', () => {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
    });
});

// ===== Navbar Background on Scroll =====
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        nav.style.background = 'rgba(17, 24, 38, 0.98)';
        nav.style.boxShadow = '0 4px 30px rgba(45, 156, 219, 0.2)';
    } else {
        nav.style.background = 'rgba(17, 24, 38, 0.95)';
        nav.style.boxShadow = '0 2px 20px rgba(45, 156, 219, 0.1)';
    }
});

// ===== Animate Elements on Scroll =====
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-card, .project-card, .contact-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// ===== Initialize Social Links Animation =====
const socialLinks = document.querySelectorAll('.social-links a');
socialLinks.forEach((link, index) => {
    link.style.animationDelay = `${index * 0.1}s`;
});

// ===== Add Hover Sound Effect (Optional) =====
// Uncomment if you want to add sound effects
/*
const hoverSound = new Audio('path/to/hover-sound.mp3');
const buttons = document.querySelectorAll('.project-link, .skill-tag');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });
});
*/

// ===== Intersection Observer for Fade-in Animations =====
const fadeElements = document.querySelectorAll('.info-item, .skill-tag, .tech-tag');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateX(-20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    fadeObserver.observe(element);
});

// ===== Cursor Trail Effect (Optional Enhancement) =====
// Uncomment for advanced cursor effect
/*
document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
    document.body.appendChild(trail);
    
    setTimeout(() => {
        trail.remove();
    }, 500);
});
*/

// ===== Loading Animation =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== Console Easter Egg =====
console.log('%c👋 Hello Developer!', 'color: #2D9CDB; font-size: 20px; font-weight: bold;');
console.log('%cLooking at my code? Feel free to reach out!', 'color: #9BE7FF; font-size: 14px;');
console.log('%c📧 phihasky@gmail.com', 'color: #FFFFFF; font-size: 12px;');