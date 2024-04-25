const blogPost = $('#blogPost')
const usernameEL = $('#username');
const titleEL = $('#title');
const contentEL = $('#content');

$(document).ready(function() {
    // Load form data from local storage if available
    if (localStorage.getItem("blogPost")) {
        const formData = JSON.parse(localStorage.getItem("formData"));
        
        $("#username").val(formData.usernameEL);
        $("#title").val(formData.titleEL);
        $("#content").val(formData.contentEL);
    }

    // Save form data to local storage on form submission
    $("#blogPost").submit(function(event) {
        event.preventDefault(); // Prevent the form from submitting to keep the data in place
        
        const blogPost = {
            name: $("#username").val(),
            email: $("#title").val(),
            age: $("#content").val()
        };
        
        localStorage.setItem("blogPost", JSON.stringify(blogPost)); // Save to local storage
        
        alert("Form data has been saved in local storage");
    });
});
