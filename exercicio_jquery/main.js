$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();  
        const nomeTarefa = $('#nome-tarefa').val();  
        const novaTarefa = $('<li></li>').text(nomeTarefa);  
        $('ul').append(novaTarefa);  
        novaTarefa.fadeIn();  
        $('#nome-tarefa').val('');  
    });

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('completed');  
    });
});