document.getElementById('input_delete').addEventListener('keyup', function(event) {
    const text = event.target.value;
    const deleteButton = document.getElementById('delete_btn');
    const secretInfo = document.getElementById('secret_info');

    if (text === 'delete') {
        deleteButton.disabled = false;
        secretInfo.style.display = 'none';
    } else {
        deleteButton.disabled = true;
    }
});