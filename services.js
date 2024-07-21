document.addEventListener('DOMContentLoaded', function() {
    const services = document.querySelectorAll('.service');

    services.forEach(service => {
        service.addEventListener('click', function() {
            alert(`You clicked on the ${this.querySelector('h2').textContent} service!`);
        });
    });
});
