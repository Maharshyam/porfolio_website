document.addEventListener('DOMContentLoaded', function() {
    // Add an event listener to the profile picture
    const profilePic = document.querySelector('.profile-pic');
    
    profilePic.addEventListener('click', function() {
        alert('This is Shyam, a passionate web developer!');
    });

    // Add skill highlighting on hover
    const skills = document.querySelectorAll('.skills li');

    skills.forEach(skill => {
        skill.addEventListener('mouseover', function() {
            this.style.color = 'blue';
        });

        skill.addEventListener('mouseout', function() {
            this.style.color = 'initial';
        });
    });

    // Toggle experience section visibility
    const experienceSection = document.querySelector('.experience');
    const experienceToggle = document.createElement('button');
    experienceToggle.textContent = 'Toggle Experience';
    experienceToggle.style.display = 'block';
    experienceToggle.style.margin = '20px 0';

    experienceToggle.addEventListener('click', function() {
        if (experienceSection.style.display === 'none') {
            experienceSection.style.display = 'block';
            this.textContent = 'Hide Experience';
        } else {
            experienceSection.style.display = 'none';
            this.textContent = 'Show Experience';
        }
    });

    experienceSection.parentNode.insertBefore(experienceToggle, experienceSection);
});
