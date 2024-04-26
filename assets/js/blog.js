const blogPostContent = document.getElementById("blogPostContent");

function displayBlogPost() {
    const blogPostArray = JSON.parse(localStorage.getItem('blogPost'));
    console.log(blogPostArray) 
    if (blogPostArray !== null) {
        for (let i = 0; i < blogPostArray.length; i++) {
            const post = document.createElement('div');

            const titleEl = document.createElement('h3');
            titleEl.textContent = blogPostArray[i].title;
            
            const usernameEl = document.createElement('p');
            usernameEl.innerHTML = blogPostArray[i].username;

            const contentEl = document.createElement('div');
            contentEl.innerHTML = blogPostArray[i].content;
    
            post.appendChild(titleEl);
            post.appendChild(usernameEl);
            post.appendChild(contentEl);
    
            blogPostContent.appendChild(post);    
        }
    } else {
        $("#blogPostContent").html("<p> No blog post found in local storage.</p>");
    }
}
$(document).ready(function() {
    displayBlogPost();
});

//Is this loop in the right place & is this just format? How do I post it? document.createElemente?
//Need to debug why the post doesnt showup