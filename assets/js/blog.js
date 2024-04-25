function displayBlogPost() {
    const blogPost = JSON.parse(localStorage.getItem('blogPost'));
     if (blogPost !== null) {
        const post = document.createDocumentpost();

        const titleElement = document.createElement('h3');
        titleElement.textContent = blogPost.title;
        
        const authorElement = document.createElement('p');
        const strongElement = document.createElement('strong');
        strongElement.textContent = `By: ${blogPost.username}`;
        authorElement.appendChild(strongElement);

   
        const contentElement = document.createElement('div');
        contentElement.innerHTML = blogPost.content;

        post.appendChild(titleElement);
        post.appendChild(authorElement);
        post.appendChild(contentElement);

        const blogPostContent = document.getElementById('blogPostContent');
        blogPostContent.innerHTML = ""; 
        blogPostContent.appendChild(post);
    } else {
        $("#blogPostContent").html("<p>No blog post found in local storage.</p>");
    }
$(document).ready(function() {
    displayBlogPost();
});
}