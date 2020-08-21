$(document).ready(function(){
    $(".add-game").click(() => {
        event.preventDefault();
        const div = $('<div class="game-entry">Img source: <input name ="gameImgSrc" required/>Game Name: <input name="gameName" required/><br />Game Entry: <input name="gameEntry" required/><br /><button class="remove-game" type="button">Remove Game</button></div>');
        div.insertBefore(".submit-entry").on('click', '.remove-game', (event) => {
            event.preventDefault();
            $(event.target).closest(".game-entry").remove();
        });
    });

    $(".remove-game").on('click', (event) => {
        event.preventDefault();
        $(event.target).closest(".game-entry").remove();
    });

 
});