/* document.getElementById('updateTitleBtn').addEventListener('click', function () {
    const pageTitle = document.getElementById('page_title');
    pageTitle.innerText = 'Updated page title text';
});


document.getElementById('login').addEventListener('click', function() {
    const user = document.getElementById('user');

    user.innerText = 'User Login';
});

*/

document.getElementById('updateButton').addEventListener('click', function() {
    const inputText = document.getElementById('input_text');
    const name = document.getElementById('name');

    name.innerText = inputText.value;
});