const form = document.querySelector("form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you! Your message has been sent successfully ❤️");

    form.reset();

});