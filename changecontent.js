document.addEventListener('DOMContentLoaded', () => {
    const aboutText = document.querySelector('.about-text p'); // Select the about text
    const aboutVersions = [
        "I am a passionate and innovative software engineer with a knack for turning ideas into reality. Specializing in **full-stack development**, **mobile app creation**, and **database management**, I thrive on solving complex problems and building scalable, user-friendly solutions that make a real impact. When I'm not coding, you'll find me exploring the latest in **emerging technologies**, contributing to **open-source projects**, and mentoring the next generation of developers. I believe in the power of collaboration and continuous learning to drive innovation and create a better digital future.",
        "As a software engineer, I specialize in **full-stack development**, **mobile apps**, and **database systems**. I love tackling challenging problems and creating solutions that are not only functional but also elegant and efficient. Beyond coding, I'm passionate about staying ahead of the curve with **new technologies**, contributing to **open-source communities**, and sharing my knowledge through mentorship. For me, technology is not just a career—it's a way to make a meaningful difference.",
        "I'm a software engineer who loves building things that matter. With expertise in **full-stack development**, **mobile applications**, and **database management**, I focus on delivering high-quality, impactful solutions. When I'm not immersed in code, I enjoy diving into **cutting-edge tech trends**, collaborating on **open-source initiatives**, and guiding aspiring developers. I believe that great software is built on creativity, curiosity, and a commitment to excellence."
    ];

    let index = 0;
    function changeAboutText() {
        aboutText.innerHTML = aboutVersions[index];
        index = (index + 1) % aboutVersions.length; // Cycle through the array
    }

    // Change the about text every 10 seconds
    setInterval(changeAboutText, 10000);
    changeAboutText(); // Initialize the first version
});