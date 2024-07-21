document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const clientName = document.querySelector('#clientname');
    const clientEmail = document.querySelector('#clientemail');
    const clientEnquiry = document.querySelector('#clientenquiry');
    const clientPhone = document.querySelector('#clientphone');
    const isClient = document.querySelector('#isclient');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Basic form validation
        if (!clientName.value.trim()) {
            alert('Please enter your name.');
            clientName.focus();
            return;
        }

        if (!clientEmail.value.trim() || !validateEmail(clientEmail.value)) {
            alert('Please enter a valid email address.');
            clientEmail.focus();
            return;
        }

        if (!clientEnquiry.value.trim()) {
            alert('Please enter your enquiry.');
            clientEnquiry.focus();
            return;
        }

        if (!clientPhone.value.trim() || !validatePhone(clientPhone.value)) {
            alert('Please enter a valid phone number.');
            clientPhone.focus();
            return;
        }

        // Form submission logic
        const formData = {
            name: clientName.value.trim(),
            email: clientEmail.value.trim(),
            enquiry: clientEnquiry.value.trim(),
            phone: clientPhone.value.trim(),
            isClient: isClient.checked
        };

        console.log('Form submitted:', formData);
        alert('Thank you for your enquiry!');

        // Reset the form
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^[0-9]{10}$/;
        return re.test(phone);
    }
});
