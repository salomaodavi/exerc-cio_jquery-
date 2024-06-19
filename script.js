$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault();

        let task = $('#task-input').val();

        if (task) {
            $('#task-list').append('<li>' + task + '</li>');
            $('#task-input').val('');
        }
    });

    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});