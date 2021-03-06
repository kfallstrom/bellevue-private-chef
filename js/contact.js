/*!
 * Custom contact handler
 */

(function($) {
    var contactForm = document.getElementById("contactform");
    var successMessage = document.getElementById("successmessage");

    contactForm.onsubmit = function(event) {
        event.preventDefault(); // Don't let the browser submit the form.
        var payload = {};
    
        // Build JSON key-value pairs using the form fields.
        contactForm.querySelectorAll("input, textarea").forEach(field => {
            payload[field.name] = field.value;
        });
    
        // Post the payload to the contact endpoint.
        fetch("http://localhost:7071/api/FormResponse", {
            method: "post",
            body: JSON.stringify(payload)
        }).then(resp => {
            if (!resp.ok) {
                console.error(resp);
                return;
            }
            // Display success message.
            successMessage.style.display = "block";
            contactForm.style.display = "none";
        });
    };
})(jQuery); // End of use strict
