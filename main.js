$(document).ready(function() {

    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancela').click(function() {
        $('form').slideUp();
    })


    $('form').on('submit', function(e) {
        e.preventDefault();

        const imgNova = $('#nova-imagem').val();
        const addImg = $('<li style="display: none"></li>');
        $(`<img src="${imgNova}" />`).appendTo(addImg);
        
        $(`<div class="imagem-link">
            <a href="${imgNova}" target="_blank">Abrir imagem</a>
            </div>`
        ).appendTo(addImg);

        $(addImg).appendTo('ul');
        $(addImg).fadeIn();

        $('#nova-imagem').val('')
        
        })
}) 