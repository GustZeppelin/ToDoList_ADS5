$(document).ready(function(){
    $('.edit-button').on('click', function () {
        var $task = $(this).closest('.task');
        $task.find('.progress').addClass('hidden');
        $task.fing('.task-description').addClass('hidden');
        $task.fing('.task-actions').addClass('hidden');
        $task.fing('.edit-task').addClass('hidden');
    });

    $('.progress').on('click', function () {
        if ($(this).is(':checked')) {
            $(this).addClass('done');
        } else {
            $(this).removeClass('done');
        }
    });
})