document.getElementById('comment_submit').addEventListener('click', function () {
    const commentTextBox = document.getElementById('comment')

    const commentText = commentTextBox.value

    const commentContainer = document.getElementById('comment_container')

    const newComment = document.createElement('p')

    newComment.classList.add('comment')
    newComment.textContent = commentText
    commentContainer.appendChild(newComment)

    commentTextBox.value = '';
});