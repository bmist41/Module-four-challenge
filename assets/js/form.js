const blogPost = $('#blogPost')
const usernameEL = $('#username');
const titleEL = $('#title');
const contentEL = $('#content');



function handleFormSubmit(event) {
    event.preventDefault();

    console.log('username', usernameEl.val()); 
    console.log('title', titleEL.val());
    console.log('conent', contentEL.val())  
}

blogPost.on('SUBMIT', handleFormSubmit)