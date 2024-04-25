function displayBlogPost() {
    const blogPost = JSON.parse(localStorage.getItem('blogPost'));
        if (blogPost !== null) {
            const postHtml = document.createElement (`
                <h3>${blogPost.title}</h3>
                <p><strong>By: ${blogPost.username}</strong></p>
                <div>${blogPost.content}</div>
            `);
            $("#blogPostContent").html(postHtml);
        } else {
            $("#blogPostContent").html("<p>No blog post found in local storage.</p>");
        }
    postHtml.appendChild('<h2>')
    }

