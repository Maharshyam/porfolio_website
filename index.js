document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.querySelector('.buttons a[href="/cv.txt"] button');
    const contactButton = document.querySelector('.buttons a[href="/contact.html"] button');

    downloadButton.addEventListener('click', function() {
        alert('You are about to download Shyam Kumar\'s CV.');
    });

    contactButton.addEventListener('click', function() {
        alert('You are about to navigate to the Contact Me page.');
    });
});
