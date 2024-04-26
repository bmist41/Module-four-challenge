const blogPost = $('#blogPost')
const usernameEL = $('#username');
const titleEL = $('#title');
const contentEL = $('#content');

$(document).ready(function() {
    // Save form data to local storage on form submission
    $("#blogPost").submit(function(event) {
        event.preventDefault(); 
        const existingBlogPosts = JSON.parse(localStorage.getItem("blogPost")) || []
        const blogPost = {
            username: $("#username").val(),
            title: $("#title").val(),
            content: $("#content").val()
        };
         existingBlogPosts.push(blogPost)
         localStorage.setItem("blogPost", JSON.stringify(existingBlogPosts));
        
        alert("Your Form data has been saved in local storage! (I hope)");
    });
});
