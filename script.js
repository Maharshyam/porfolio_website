document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to the buttons
    const buttons = document.querySelectorAll('.buttons button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert(`You clicked on the ${this.innerText} button!`);
        });
    });

    // Example of a function to change the text content of an element
    function updateIntroduction() {
        const introElement = document.querySelector('.moreabout');
        introElement.innerHTML = "I'm passionate about web development and love creating innovative solutions.";
    }

    // Call the function to update the introduction text after 3 seconds
    setTimeout(updateIntroduction, 3000);
});