const blogPost = $('#blogPost')
const usernameEL = $('#username');
const titleEL = $('#title');
const contentEL = $('#content');

$(document).ready(function() {
    // Save form data to local storage on form submission
    $("#blogPost").submit(function(event) {
        event.preventDefault(); 
        
        const blogPost = {
            name: $("#username").val(),
            email: $("#title").val(),
            age: $("#content").val()
        };
         // Saves to local storage
         localStorage.setItem("blogPost", JSON.stringify(blogPost));
        
        alert("Your Form data has been saved in local storage! (I hope)");
    });
});
