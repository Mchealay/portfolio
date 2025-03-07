// Add dynamic animations and effects to the hero section
document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.getElementById('hero');
    const heroText = document.querySelector('.hero-text h2');
    const heroParagraph = document.querySelector('.hero-text p');
    const heroButton = document.querySelector('.hero-text .btn');
    const heroImage = document.querySelector('.hero-image img');

    // Add a glowing effect to the hero text
    heroText.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
    setInterval(() => {
        const glowIntensity = Math.random() * 20 + 10; // Random glow intensity
        heroText.style.textShadow = `0 0 ${glowIntensity}px rgba(255, 255, 255, 0.8)`;
    }, 1000); // Update glow every second

    // Add a typewriter effect to the hero text
    const text = "Hello, I'm Mchaelay Hafte"; // Replace with your text
    let index = 0;
    function typeWriter() {
        if (index < text.length) {
            heroText.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Adjust typing speed
        }
    }
    typeWriter();

    // Add a floating animation to the hero image
    let floatingDirection = 1;
    setInterval(() => {
        const currentTransform = heroImage.style.transform || 'translateY(0)';
        const currentY = parseFloat(currentTransform.match(/translateY\(([-\d.]+)px\)/)[1]) || 0;
        const newY = currentY + floatingDirection * 5; // Move up or down by 5px
        heroImage.style.transform = `translateY(${newY}px)`;

        if (newY >= 10 || newY <= -10) {
            floatingDirection *= -1; // Reverse direction
        }
    }, 100); // Update position every 100ms

    // Add a hover effect to the hero button
    heroButton.addEventListener('mouseenter', () => {
        heroButton.style.transform = 'scale(1.1)';
        heroButton.style.boxShadow = '0 0 20px rgba(255, 111, 97, 0.8)';
    });
    heroButton.addEventListener('mouseleave', () => {
        heroButton.style.transform = 'scale(1)';
        heroButton.style.boxShadow = 'none';
    });

    // Add a background animation to the hero section
    const colors = ['#007BFF', '#00BFFF', '#FF6F61', '#6F61FF']; // Gradient colors
    let colorIndex = 0;
    setInterval(() => {
        heroSection.style.background = `linear-gradient(135deg, ${colors[colorIndex]}, ${colors[(colorIndex + 1) % colors.length]})`;
        colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
    }, 5000); // Change gradient every 5 seconds

    // Add a particle effect to the hero section
    const particleContainer = document.createElement('div');
    particleContainer.style.position = 'absolute';
    particleContainer.style.top = '0';
    particleContainer.style.left = '0';
    particleContainer.style.width = '100%';
    particleContainer.style.height = '100%';
    particleContainer.style.overflow = 'hidden';
    particleContainer.style.pointerEvents = 'none';
    heroSection.appendChild(particleContainer);

    for (let i = 0; i < 50; i++) { // Create 50 particles
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '10px';
        particle.style.height = '10px';
        particle.style.backgroundColor = '#fff';
        particle.style.borderRadius = '50%';
        particle.style.opacity = '0.5';
        particle.style.transform = `translate(${Math.random() * 100}vw, ${Math.random() * 100}vh)`;
        particleContainer.appendChild(particle);

        // Animate particles
        setInterval(() => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            particle.style.transform = `translate(${x}vw, ${y}vh)`;
        }, 2000); // Move particles every 2 seconds
    }
});